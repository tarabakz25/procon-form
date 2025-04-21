import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function GET() {
  try {
    const supabase = createClient()
    const { data, error } = await supabase.from('submissions').select('*')

    if (error) {
      throw error
    }
    
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return NextResponse.json({ message: 'Error fetching submissions' }, { status: 500 });
  }
} 