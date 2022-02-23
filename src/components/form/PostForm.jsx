import React from "react";

export default function PostForm({title, body,handleAddTitle, handleAddBody, handleAddPost}) {
    return (
    <form className="form border container-sm p-3">
        <label className="form-label">Titulo</label>
        <input type="text" className="form-control" value={title} onChange={handleAddTitle} />
        <label className="form-label">Corpo</label>
        <input type="text" className="form-control" value={body} onChange={handleAddBody} />
        <button className="btn btn-primary mt-2" onClick={handleAddPost}>Adicionar</button>
    </form>
    )
}