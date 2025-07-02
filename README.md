# 📘 Divya’s Portfolio API

A simple, developer-friendly API that serves structured JSON responses representing my  portfolio, technical presence, and digital resources — designed to demonstrate my API documentation, OpenAPI, and Swagger UI skills.

---

## 🔖 Overview

| Field             | Value                                  |
|------------------|----------------------------------------|
| **API Version**   | `v1.0.0`                               |
| **OpenAPI Spec**  | [`openapi.yaml`](./docs/openapi.yaml) |
| **Docs Hosted**   | [Live Swagger UI](https://divyavvadhyar.github.io/portfolio-api/) |
| **Spec Format**   | OpenAPI 3.0                            |
| **Content-Type**  | `application/json`                    |
| **Status**        | Static / Mock API                     |

---

## 🚀 API Endpoints

### `POST /gql.hashnode.com/`

Returns profile data as if fetched via a GraphQL query from Hashnode.

#### 📥 Request (GraphQL-style)

```json
{
  "query": "{ user(username: \"syntaxandsoul\") { name bio socialMediaLinks { github linkedin } techStack { totalDocuments } } }"
}
```

#### 📤 Response (200 OK)

```json
{
  "data": {
    "user": {
      "name": "Divya Vadhyar",
      "bio": "Tech writer passionate about docs and dev experience",
      "username": "syntaxandsoul",
      "tagline": "Docs. Depth. Dev empathy.",
      "socialMediaLinks": {
        "github": "https://github.com/divyavvadhyar",
        "linkedin": "https://linkedin.com/in/divya-vadhyar"
      },
      "techStack": {
        "totalDocuments": 4
      }
    }
  }
}
```

## 🧠 Purpose
This API project was created to:

* ✅ Demonstrate my skills in API documentation using OpenAPI 3.0
* ✅ Publish Swagger UI via GitHub Pages
* ✅ Showcase how static APIs can simulate real-world schemas for portfolio and writing samples
* ✅ Build an interactive developer-friendly documentation interface

## 📂 Related Links

| **Resource**       |	**Links**                        |
|--------------------|-----------------------------------|
| **Swagger Docs** |	Live Documentation (Coming soon) |
| **GitHub Repo**  |	[github.com/divyavvadhyar/portfolio-api](https://github.com/divyavvadhyar/portfolio-api) |
| **Postman API**  |	(Coming soon) |
| **Hashnode Blog**|	[syntaxandsoul.hashnode.dev](https://hashnode.com/@SyntaxAndSoul) |
| **LinkedIn**     |	[linkedin.com/in/divyavadhyar](https://www.linkedin.com/in/divya-vadhyar/) |

## 🛠 Tech Stack

🔹 YAML / OpenAPI 3.0

🔹 Swagger UI (static build)

🔹 GitHub Pages for hosting

🔹 GraphQL-like request structure for realism

### ⚠️ Known Limitation

This Swagger UI is hosted as a static page via GitHub Pages. It does **not** connect to a live backend.

> Trying the "Try it out" feature will return a `405 Method Not Allowed` error — this is expected behavior due to GitHub Pages not supporting POST requests. 

This API is meant to demonstrate documentation, structure, and realistic examples — not to execute live queries.

> “Syntax and Soul” — because great documentation is both precise and human.

