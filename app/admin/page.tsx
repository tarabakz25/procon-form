'use client'
import { useState, useEffect } from 'react'

type Submission = {
    id: string
    name: string
    participation: boolean
    createdAt: string
}

export default function AdminPage() {
    const [submissions, setSubmissions] = useState<Submission[]>([])
    
    useEffect(() => {
        fetch('/api/submissions')
        .then(res => res.json())
        .then(data => setSubmissions(data))
        .catch(err => console.error('Error fetching submissions:', err))
    }, [])

    const wantsToJoin = submissions.filter(submission => submission.participation).length

    return (
        <main className="p-6 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
        <h1 className="text-2xl mb-4">管理画面</h1>
        <p className="mb-2">総件数: <strong>{submissions.length}</strong> 件</p>
        <p className="mb-4">参加希望: <strong>{wantsToJoin}</strong> 件</p>

        <table className="w-full border-collapse">
            <thead>
            <tr className="bg-gray-700">
                <th className="border px-2 py-1">名前</th>
                <th className="border px-2 py-1">参加希望</th>
                <th className="border px-2 py-1">日時</th>
            </tr>
            </thead>
            <tbody>
            {submissions.map((s) => (
                <tr key={s.id}>
                <td className="border px-2 py-1">{s.name}</td>
                <td className="border px-2 py-1">{s.participation ? "○" : "×"}</td>
                <td className="border px-2 py-1">
                    {new Date(s.createdAt).toLocaleString()}
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </main>
    )  
}