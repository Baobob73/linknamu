import { NextResponse } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";
import { linkIds } from "@/data/profile";

export const dynamic = "force-dynamic";

/** 모든 링크의 클릭 수: { counts: { [linkId]: count }, enabled } */
export async function GET() {
  try {
    const col = await getClicksCollection();
    if (!col) return NextResponse.json({ counts: {}, enabled: false });

    const docs = await col.find({}).toArray();
    const counts: Record<string, number> = {};
    for (const d of docs) counts[d._id] = d.count;
    return NextResponse.json({ counts, enabled: true });
  } catch (err) {
    console.error("[clicks GET]", err);
    return NextResponse.json({ error: "failed to load counts" }, { status: 500 });
  }
}

/** 클릭 1회 기록: body { id: string } */
export async function POST(req: Request) {
  let id: unknown;
  try {
    ({ id } = await req.json());
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }
  if (typeof id !== "string" || !linkIds.has(id)) {
    return NextResponse.json({ error: "unknown link id" }, { status: 400 });
  }

  try {
    const col = await getClicksCollection();
    if (!col) return NextResponse.json({ ok: true, enabled: false });

    await col.updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[clicks POST]", err);
    return NextResponse.json({ error: "failed to record click" }, { status: 500 });
  }
}
