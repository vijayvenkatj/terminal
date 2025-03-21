

export function help(){
    const responce = "Available commands:\n  help - Show this help message\n  gui - Switch to Graphical Interface\n  about - Learn about me\n  skills - View my technical skills\n  projects - See my projects\n  experience - View my work experience\n  contact - Get my contact information\n  clear - Clear the terminal"
    return responce
}

export function about(){
    const responce = "Full Stack Developer | Security Researcher \n  Building scalable, secure apps with React, Next.js, and Node.js.\n  Passionate about cybersecurity, DevOps, and CTFs."
    return responce
}

export function contact() {
    const response = `📌 Contact Me\n
🔗 GitHub: https://github.com/vijayvenkatj\n
💼 LinkedIn: https://www.linkedin.com/in/vijayvenkatj/\n
🛡️ TryHackMe: https://tryhackme.com/p/Vijayvenkatj`;

    return response;
}

export function skills() {
    const response = `🛠️ Technical Skills\n
💻 Frontend: React ⚛️, Next.js 🚀, TypeScript ⌨️\n
🖥️ Backend: Node.js 🌿, Express 🚏\n
🗄️ Database: MongoDB 🍃, PostgreSQL 🐘\n
☁️ DevOps: Docker 🐳, Kubernetes ☸️, AWS ☁️, GitHub Actions ⚡\n
🛡️ Security: Burp Suite 🕵️, Nmap 🔍\n`;

    return response;
}

export function projects() {
    return `🚀 Projects\n
1️⃣ IntelliSum - ✉️ AI-Powered Email Summarization  
   🔹 Gmail API + Gemini AI for smart email summaries  
   🌐 https://intellisum.vijayvenkatj.me | 🛠️ GitHub: /vijayvenkatj/IntelliSum  

2️⃣ TimeTable - 📅 AI-Optimized Scheduling  
   🔹 Smart conflict detection & intuitive UI  
   🌐 https://timetable.vijayvenkatj.me | 🛠️ GitHub: /CampusCrafters/Timetable_v2  

3️⃣ Cypher-Cli - 🔐 Secure Password Manager  
   🔹 CLI & browser-based with zero-knowledge encryption  
   🛠️ GitHub: /vijayvenkatj/Cypher-Cli  

4️⃣ Portfolio - 🌐 Personal Website  
   🔹 Modern, responsive & SEO-optimized  
   🌐 https://vijayvenkatj.me  
`;
}


export function ls() {
    const responce = "Available commands:\n  help \n  gui \n  about \n  skills \n  projects \n  contact\n  clear "
    return responce
}