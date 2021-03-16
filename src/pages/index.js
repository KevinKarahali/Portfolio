import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
import SEO from "../components/seo"
const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className="hero">
      <div className="hero__content container">
        <h2 className="no-margin hero__h2">
          Hi! I'm web <a>developer.</a>
        </h2>
        <div className="hero__img">
          <StaticImage
            className="hero-img"
            src="../images/perfil2.png"
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Foto Perfil"
          />
        </div>
      </div>
    </div>
    <h3 className=" container about-me">About me</h3>

    <p className=" container p-info">
      I come from Caracas, Venezuela. I love programming and have a special
      interest for back-end development. Anyway, i can also adapt to front-end
      development, where i have done most of my projects and enhanced my skills.
      I generally enjoy learning new technologies.
    </p>

    <div className="git container">
      <a
        className="icon_github"
        href="https://github.com/KevinKarahali"
        rel="noreferrer"
        target="_blank"
      >
        <StaticImage
          className="icon_github_static"
          src="../images/github-icon.svg"
          quality={100}
          alt="icon-github"
        />
      </a>
    </div>
  </>
)

export default IndexPage
