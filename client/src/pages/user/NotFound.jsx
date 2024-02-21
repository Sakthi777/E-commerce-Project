import React from "react";
import "../../styles/user/NotFound.css";
import giticon from '../../../src/assets/images/notfound-img/github-icon.png'


export default function NotFound() {
  return (
    <div>
      <div className="notfound">
        <div className="notfound-head">
          <h1>404</h1>
          <p>
            <strong>File not found</strong>
          </p>
          <p>
            The site configured at this address does not contain the requested
            file.
          </p>
          <p>
            If this is your site, make sure that the filename case matches the
            URL as well as any <br />
            file permissions.
            <br />
            For root URLs (like http://example.com/) you must provide an
            index.html file.
          </p>
          <p>
            <a href="...">Read the full documentation </a>
            for more information about using<strong> GitHub Pages</strong>.
          </p>
        </div>
        <div className="notfound-site">
          <a href="...">GitHub Status </a>--
          <a href="..."> @githubstatus</a>
        </div>
        <div className="git-logo">
          <img src={giticon} alt="git" />
        </div>
      </div>
    </div>
  );
}
