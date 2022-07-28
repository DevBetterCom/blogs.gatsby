import * as React from "react"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper container" data-is-root-path={isRootPath}>
      <header class="d-flex justify-content-center py-3">      
      <ul class="nav nav-pills">
        <li class="nav-item">
          <img src="/logo_218x48.png" alt="devBetter Logo" />
        </li>
        <li class="nav-item mt-1">
          <a href="https://www.devBetter.com" class="nav-link">
            Home
          </a>
        </li>
        <li class="nav-item mt-1">
          <a href="#" class="nav-link active" aria-current="page">
            Blog
          </a>
        </li>
      </ul></header>
      <main>{children}</main>
      <footer className="text-center">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
