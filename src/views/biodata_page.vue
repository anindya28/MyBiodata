<template>
    <div class="container">
      <div class="header">
        <img src="@/assets/foto.png" alt="Profile Photo" class="profile-photo" />
        <div class="contact-info">
          <h1>Anindya Candrakanti Yusnida</h1>
          <p>Malang, East Java | 0895352990279 | acandrakanti@gmail.com</p>
          <p>
            <a href="https://www.linkedin.com/in/anindyacandrakanti/">LinkedIn</a> | 
            <a href="https://portfolio-anin.notion.site/?pvs=4 ">Portfolio</a>
          </p>
        </div>
      </div>
  
      <section>
        <h2>Profil</h2>
        <p>
          Active 6th-semester Information Systems student with a strong interest and skills in UI/UX design,
          data management, and quality assurance. Passionate about learning business processes and technology.
          Proficient in Figma, Looker Studio, and Google Workspace.
        </p>
      </section>
  
      <section>
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>PT Thunderlabs Indonesia – UI/UX Design Intern</strong><br />
            Jul 2022 – Jan 2023 | Malang, Indonesia<br />
            • Designed UI/UX for “Coco Culture” voting application<br />
            • Created 2 Instagram posts for company branding
          </li>
          <li>
            <strong>Freelance UI/UX Designer</strong><br />
            Sep 2023 – Oct 2023 | Remote<br />
            • Designed mobile app for postpartum care<br />
            • Built interactive prototypes and design system
          </li>
          <li>
            <strong>Freelance Software Tester</strong><br />
            Jul 2021 – Sep 2021 | Remote<br />
            • Performed manual testing on SIAPP NV website<br />
            • Reported bugs and suggested improvements
          </li>
        </ul>
      </section>
  
      <section>
        <h2>Education</h2>
        <p><strong>Universitas Brawijaya</strong> – Sistem Informasi (GPA 3.88), 2022 - 2026</p>
      </section>
  
      <section>
        <h2>Course & Certifications</h2>
        <ul>
          <li>Google Looker Studio by MySkill – <em>April 13, 2025</em></li>
          <li>Business Analysis & Process Management by Coursera – <em>Mar 21, 2025</em></li>
          <li>QA Test Technique by MySkill – <em>Dec 26, 2024</em></li>
          <li>Quality Assurance Introduction by MySkill – <em>Dec 25, 2024</em></li>
          <li>Project Management Fundamentals IBM SkillsBuild – <em>Nov 10, 2024</em></li>
          <li>Memulai Pemrograman dengan Python by Dicoding – <em>Nov 10, 2024</em></li>
          <li>Belajar Dasar SQL by Dicoding – <em>Oct 26, 2024</em></li>
          <li>3rd Place in Lomba Web Design TIK Festival 2023 by Himatik Politeknik Jakarta</li>
        </ul>
      </section>
  
      <section>
        <h2>Organizational Experience</h2>
        <p><strong>KBMDSI – Keluarga Besar Mahasiswa Departemen Sistem Informasi</strong></p>
        <ul>
          <li><strong>As Head of Social Profession Department</strong> (Feb 2024 – Dec 2024)</li>
          <ul>
            <li>Lead department programs within one period</li>
            <li>Acted as Steering Committee for events</li>
            <li>Achieved evaluation score above 90</li>
          </ul>
          <li><strong>As Social Creative Department Staff</strong> (May 2023 – Nov 2023)</li>
          <ul>
            <li>Managed “Peduli Bersama” social program</li>
            <li>Lead “WARUNG” content creation (6 published posts)</li>
            <li>Head of Event for “Career Visit”</li>
            <li>Treasurer for “IT Fest”</li>
            <li>Designed website and 93 Instagram feeds for “IT Fest”</li>
          </ul>
        </ul>
  
        <p><strong>RAION FILKOM UB</strong></p>
        <ul>
          <li><strong>As Hipster Member – UI/UX Designer Apps</strong> (Apr 2023 – Nov 2023)</li>
          <ul>
            <li>Event Division for “RAION INSIGHT”</li>
            <li>MC for Day 2 of “RAION INSIGHT”</li>
            <li>Time Keeper for “RAION ACADEMY” Programmer class</li>
          </ul>
        </ul>
      </section>
  
      <section>
        <h2>Skills & Competencies</h2>
        <p><strong>Skillset:</strong> SQL, Java, Python, UI/UX Design (Design Thinking), QA (Manual Testing, Test Case, Bug Reporting, Unit Testing), Data Management (Cleaning, Processing, Analysis, Visualization)</p>
        <p><strong>Soft Skill:</strong> Leadership, Adapt Quickly, Diligent, Time Management, Teamwork, Communication, Problem Solving</p>
        <p><strong>Toolset:</strong> Figma, Canva, Google Workspace, MS Office, Eclipse, Looker Studio, Google Colab, MySQL Workbench, Adobe (Illustrator, Premiere, After Effect)</p>
        <p><strong>Languages:</strong> Indonesian (Native), English (Intermediate)</p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BiodataPage'
  }
  </script>
  
  <style scoped>
.container {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.profile-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
  border: 2px solid #ddd;
}

.contact-info h1 {
  font-size: 24px;
  margin: 0;
}

.contact-info p {
  margin: 4px 0;
}

h2 {
  font-size: 20px;
  margin-top: 30px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 4px;
}

a {
  color: #004aad;
  text-decoration: none;
  margin-right: 10px;
}

ul {
  padding-left: 16px;
  margin-top: 10px;
}

ul li {
  margin-bottom: 8px;
}

section {
  margin-bottom: 30px;
}

.container {
  text-align: left;
}

</style>