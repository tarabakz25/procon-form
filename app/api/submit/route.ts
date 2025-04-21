import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    const { name, participation } = await request.json()

    const supabase = await createClient()

    const { data, error } = await supabase.from('submissions').insert({
        name,
        participation
    })

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ data })
}