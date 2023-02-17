import { useState } from 'react'
import supabase from '../../database/supabase'

const CATEGORIES = [
    { name: 'technology', color: '#3b82f6' },
    { name: 'science', color: '#16a34a' },
    { name: 'finance', color: '#ef4444' },
    { name: 'society', color: '#eab308' },
    { name: 'entertainment', color: '#db2777' },
    { name: 'health', color: '#14b8a6' },
    { name: 'history', color: '#f97316' },
    { name: 'news', color: '#8b5cf6' },
]

const isValidHttpUrl = (string) => {
    let url
    try {
        url = new URL(string)
    } catch (_) {
        return false
    }
    return url.protocol === "http:" || url.protocol === "https:"
}

const NewFactForm = ({ setFacts, setShowForm }) => {
    const [text, setText] = useState("")
    const [source, setSource] = useState("")
    const [category, setCategory] = useState("")
    const [isUploading, setIsUploading] = useState(false)
    const textLength = text.length

    const handleSubmit = async (e) => {
        // 1. prevent browser reload
        e.preventDefault()
        // 2. Check if data is valid.If so, create a new fact  
        if (text && isValidHttpUrl(source) && category) {
            // 3. Create a new fact object
            // const newFact = {
            //     id: Math.round(Math.random() * 100000),
            //     text,
            //     source,
            //     category,
            //     votesInteresting: 0,
            //     votesMindblowing: 0,
            //     votesFalse: 0,
            //     createdIn: new Date().getFullYear(),
            // }
            setIsUploading(true)
            const { data: newFact, error } = await supabase
                .from("facts")
                .insert([{ text, source, category }])
                .select()
            setIsUploading(false)
            // 4. Add the new fact to the UI and supabase:add the fact to state    
            if (!error) setFacts((facts) => [newFact[0], ...facts])
            else alert("There was a problem inserting data")
            // 5. Reset input fields.
            setText("")
            setSource("")
            setCategory("")
            // 6. Close the form.
            setShowForm(false)
        }
    }

    return (
        <form className="fact-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Share a fact with the world..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                disabled={isUploading} />
            <span>{200 - textLength}</span>
            <input
                type="text"
                placeholder="ex:http:example.com || Trustworthy source... " value={source}
                onChange={(e) => setSource(e.target.value)}
                disabled={isUploading} />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                disabled={isUploading}
            >
                <option value="">Choose category:</option>
                {CATEGORIES.map((cat) =>
                (<option
                    key={cat.name}
                    value={cat.name}
                    style={{ backgroundColor: cat.color }}>{cat.name.toUpperCase()}
                </option>))}
            </select>
            <button className="btn btn-lg" disabled={isUploading}>Post</button>
        </form>
    )

}

export default NewFactForm