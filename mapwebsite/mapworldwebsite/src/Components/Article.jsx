import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Article = ({ article }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [editContent, setEditContent] = useState("");

    const dateFormater = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            seconde: "numeric",
        });
        return newDate;
    };


    const handleEdit = () => {

        const objectEdit = {
            author: article.author,
            content: editContent ? editContent : article.content,
            date: article.date,
            updatedDate: Date.now(),
        };

        axios.put('http://localhost:3004/articles/' + article.id, objectEdit).then(() =>
            setIsEdit(false))
            ;
    };
    
    const handleDelete = () => {
        axios.delete("http://localhost:3004/articles/" + article.id)
        window.location.reload();
    }

    return (
        <div className="article"
            style={{ background: isEdit ? "#f3feff57" : "#ffffff"}}>
            <div className="card-header">
                <h3>{article.author}</h3>
                <em>posté le {dateFormater(article.date)}</em>
            </div>
            {
                isEdit ?
                    <textarea
                         defaultValue={ editContent ? editContent : article.content}
                         onChange={(e) => setEditContent(e.target.value)}
                         autoFocus ></textarea> : (
                    <p>{editContent ? editContent : article.content}</p>
            )}

            <div className="btn-container">
                {isEdit ?
                    (<button onClick={() => handleEdit()}>Valider</button>
                    ) :
                    (<button onClick={() => setIsEdit(true)}>Edit</button>)}
                <button onClick={() => 
                {
                    if (window.confirm('Voulez vous supprimez cet article?')) {
                        handleDelete();
                    }
                }
                
                }>Supprimer</button>
            </div>
        </div>
    );
};

export default Article;