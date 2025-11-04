import dlt from "./assets/dlt.jpg"
import "./Blog.css"

function Blog() {

    const title = "The Future of AI: How Artificial Intelligence is Changing the World";
    const author = "David Johnson";
    const desc = "AI is reshaping industries from healthcare to finance. Explore how AI is influencing our lives today and what the future might hold.";

    const blogs = {
        width: "400px",
        border: "1px solid #14dc93ff",
        padding: "20px",
        backgroundColor: "#80e0bdff",
        borderRadius: "10px"
    }

    const blogsTitle = {
        color: "#DC143C",
        fontSize: "1.5em",
    }

    const blogsAuthor = {
        color: "#ad0023ff",
        marginTop: "5px",
        textAlign: "right",
    }

    const blogsDisc = {
        color: "#01271dff",
        marginTop: "15px",
    }


    return (
        <div className="content">
            <div style={blogs} className="blog">
                <img src={dlt} alt="" className="dltt" />
                <h1 style={blogsTitle}>{title}</h1>
                <h3 style={blogsAuthor}> - By {author}</h3>
                <p style={blogsDisc}>{desc}</p>
            </div>
        </div>
    );
}




export default Blog