'use client'
import { createClient } from '@/utils/supabase/server'
import { useUser } from '@/utils/supabase/client'

export async function createSubmission(name: string, participation: boolean) {
    const supabase = createClient()
    
    const { error } = await supabase.from('submissions').upsert({
        name,
        participation,
        created_at: new Date().toISOString()
    })

    if(error) {
        console.error(error)
        return { error: error.message }
    }

    return { success: 'Submission created successfully' }
}