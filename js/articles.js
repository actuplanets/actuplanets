import { articles_pages } from './data_articles.min.js';

document.addEventListener("DOMContentLoaded", () => {
    const div_tag_articles = document.getElementById("article-meta");
    const pathSegments = window.location.pathname.split("/");
    const articleSlug = pathSegments[pathSegments.length - 1];
    const articles_page = articles_pages.find(a => a.slug === articleSlug);
    const div_image_principal = document.getElementById('div_image_principal');  // Utilisation de querySelector pour obtenir l'élément <main>

    if (articles_page) {
        document.title = articles_page.title;
        document.getElementById("article-title-heading").innerText = articles_page.title;

        const img_articles = document.createElement("img");
        img_articles.src = articles_page.image;
        div_image_principal.appendChild(img_articles);

        document.getElementById("article-content").innerHTML = articles_page.content;

        document.getElementById("article-author").innerText = articles_page.author;
        document.getElementById("article-date").innerText = new Date(articles_page.date).toLocaleDateString();
        const metaDescriptionTag = document.querySelector('meta[name="description"]');
        if (metaDescriptionTag) {
            metaDescriptionTag.setAttribute("content", articles_page.metaDescription);
        } else {
            const newMetaDescription = document.createElement("meta");
            newMetaDescription.setAttribute("name", "description");
            newMetaDescription.setAttribute("content", articles_page.metaDescription);
            document.head.appendChild(newMetaDescription);
        }

        const tag_articles = document.createElement("p");
        tag_articles.textContent = articles_page.tag;
        console.log(articles_page.tag)
        tag_articles.className = "tag_cards";
        tag_articles.style.width = "fit-content";
        tag_articles.style.padding = "10px";
        tag_articles.style.borderRadius = "5px";

        switch (articles_page.tag) {
            case "Exploration spatiale":
                tag_articles.style.backgroundColor = "purple";
                tag_articles.style.color = "white";
                break;
            case "Vie sur b2seomds":
                tag_articles.style.backgroundColor = "green";
                tag_articles.style.color = "white";
                break;
            case "Enjeux et perspectives":
                tag_articles.style.backgroundColor = "#f0e10e";
                tag_articles.style.color = "black";
                break;
            case "Technologies et innovations":
                tag_articles.style.backgroundColor = "#294dc1";
                tag_articles.style.color = "white";
                break;
            case "Science-fiction et culture":
                tag_articles.style.backgroundColor = "black";
                tag_articles.style.color = "white";
                break;
        }
        div_tag_articles.appendChild(tag_articles);
    } else {
        document.body.innerHTML = "<p>Article not found.</p>";
    }
});