import React from "react";

const Resources = () => {
  const resources = [
    {
      category: "Cheat Sheets",
      items: [
        { title: "HTML & CSS Basics", link: "https://www.w3schools.com/html/html_css.asp" },
        { title: "JavaScript ES6+ Features", link: "https://www.w3schools.com/js/js_es6.asp" },
        { title: "React Hooks Quick Guide", link: "https://www.w3schools.com/react/react_hooks.asp" },
      ],
    },
    {
      category: "Learning Materials",
      items: [
        { title: "Fullstack Roadmap (2025)", link: "https://www.geeksforgeeks.org/blogs/full-stack-developer-roadmap/" },
        { title: "REST API Best Practices", link: "https://apidog.com/blog/rest-api-url-best-practices-examples/?utm_source=google_dsa&utm_medium=g&utm_campaign=22062217351&utm_content=169453484141&utm_term=&gad_source=1&gad_campaignid=22062217351&gbraid=0AAAAA-gKXrCaPxY4l4FSPnIZWgOS9Am-X&gclid=CjwKCAjwiNXFBhBKEiwAPSaPCXO9zp5h5ip_hcpjWZT76t0MtfvlbH3F9Mj3qy8_C_pqu3Vm7zI79xoCe5gQAvD_BwE" },
        { title: "SQL vs NoSQL Databases", link: "https://www.integrate.io/blog/the-sql-vs-nosql-difference/" },
      ],
    },
    {
      category: "Project Templates",
      items: [
        { title: "Flask + React Starter Kit", link: "https://www.jetbrains.com/webstorm/promo/?source=google&medium=cpc&campaign=EMEA_en_AFRICA_WebStorm_React_Search&term=react%20software&content=717377418392&gad_source=1&gad_campaignid=20439316792&gbraid=0AAAAADloJzhYPO0ev-lNHVgAsSDzYlBqF&gclid=CjwKCAjwiNXFBhBKEiwAPSaPCeEBjbupBs7nnsJUdJZPH9fog1_oFkIi2Abl8MqXYnxOxxb2_dSLVBoC7hoQAvD_BwE" },
        { title: "Authentication System with JWT", link: "https://www.manageengine.com/privileged-access-management/privileged-identity-management.html?network=g&device=c&keyword=identity%20management%20solutions&campaignid=15372777076&creative=564313925406&matchtype=b&placement=&adgroup=129799457643&targetid=kwd-95302979&gad_source=1&gad_campaignid=15372777076&gbraid=0AAAAACPPb6Zk7FKoeRcfxYv2LCYOB8DFP&gclid=CjwKCAjwiNXFBhBKEiwAPSaPCV7Jk8Iu3vCqxoVAFSv40orUG-g8zdoy5AvAZPtBIKuXL0YhJD5NchoCWOwQAvD_BwE" },
        { title: "Admin Dashboard UI with Tailwind", link: "https://tailadmin.com/" },
      ],
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Resources</h1>
      <p className="text-gray-700 mb-6">
        A collection of resources I’ve created and curated — from quick cheat sheets
        to full project templates — to help developers learn and build faster.
      </p>

      {resources.map((section, idx) => (
        <div key={idx} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.category}</h2>
          <ul className="list-disc list-inside space-y-2">
            {section.items.map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Resources;
