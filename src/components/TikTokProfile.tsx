import React from "react";

const TikTokProfile = () => (
  <div>
    <blockquote
      className="tiktok-embed"
      cite="https://www.tiktok.com/@scout2015"
      data-unique-id="scout2015"
      data-embed-type="creator"
      style={{maxWidth: "780px", minWidth: "288px"}}
    >
      {" "}
      <section>
        {" "}
        <a
          target="_blank"
          href="https://www.tiktok.com/@scout2015?refer=creator_embed"
        >
          @scout2015
        </a>{" "}
      </section>{" "}
    </blockquote>{" "}
    <script async src="https://www.tiktok.com/embed.js"></script>
  </div>
);
export default TikTokProfile;
