// Copyright (C) 2024 Setya Budi Pratama

// All rights reserved.

// This software is proprietary and confidential. Unauthorized copying of this file, via any medium, is strictly prohibited.
// You may not decompile, reverse engineer, disassemble, or otherwise attempt to derive the source code of this software.

// This software may not be used, copied, modified, or distributed in any form without the prior written consent of the copyright holder.

// The Berne Convention is an international agreement that protects literary and artistic works globally. Every member country must provide automatic protection for copyrighted works without requiring registration.

// Universal Copyright Convention (UCC)

// The UCC was adopted by UNESCO as an alternative to the Berne Convention for countries that are not part of the Berne Union.

// World Intellectual Property Organization (WIPO) Copyright Treaty

// These treaties strengthen copyright protection in the context of information technology and digital rights.

// Sumber Hukum di Indonesia

// Undang-Undang No. 28 Tahun 2014 tentang Hak Cipta

// Di Indonesia, hak cipta dilindungi oleh Undang-Undang No. 28 tahun 2014. Undang-undang ini memberikan perlindungan terhadap karya-karya berhak cipta di bidang ilmu pengetahuan, seni, dan sastra.

// mengambil semua elemen dengan kelas 'nav-link'
const click = document.querySelectorAll('.nav-link');

// perulangan untuk setiap elemen
click.forEach(anchor => {
    // event listener untuk event 'click' pada setiap elemen
    anchor.addEventListener('click', function (e) {
        // untuk mencegah meloncat ke bagian lain
        e.preventDefault();

        // mengambil id dari bagian yang dituju berdasarkan atribut href dari link
        const targetId = this.getAttribute('href').substring(1);

        // mengambil elemen target berdasarkan id yang diambil
        const targetElement = document.getElementById(targetId);

        // mengambil selector 'py-5' dari semua elemen
        document.querySelectorAll('.py-5').forEach(section => {
            section.classList.remove('active'); // menghapus kelas 'active'
        });

        // menambahkan kelas 'active' ke bagian yang dituju
        targetElement.classList.add('active');

        // menggulir halaman ke posisi bagian yang dituju
        window.scrollTo({
            top: targetElement.offsetTop, // mengambil posisi vertikal bagian yang dituju
            behavior: 'smooth' // menentukan perilaku scroll menjadi halus
        });
    });
});

// menambahkan event listener untuk event 'scroll'
window.addEventListener('scroll', function () {
    // Mengambil semua elemen dengan kelas 'section'
    document.querySelectorAll('.section').forEach(section => {
        // Mengambil informasi posisi setiap section relatif terhadap viewport
        const rect = section.getBoundingClientRect();

        // Jika bagian dari section terlihat di viewport, tambahkan kelas 'active'
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            section.classList.add('active'); // Tambahkan kelas 'active' jika section terlihat
        } else {
            section.classList.remove('active'); // Hapus kelas 'active' jika section tidak terlihat
        }
    });
});

// ambil parent
const iconHtml = document.querySelector('#skills .icon:first-child i');
const iconCss = document.querySelector('#skills .icon:nth-child(2) i');
const iconJavascript = document.querySelector('#skills .icon:nth-child(3) i');
// merubah warna icon di halaman skills
iconHtml.style.color = 'red';
iconCss.style.color = 'blue';
iconJavascript.style.color = 'yellow';

// Copyright (C) 2024 Setya Budi Pratama

// All rights reserved.

// This software is proprietary and confidential. Unauthorized copying of this file, via any medium, is strictly prohibited.
// You may not decompile, reverse engineer, disassemble, or otherwise attempt to derive the source code of this software.

// This software may not be used, copied, modified, or distributed in any form without the prior written consent of the copyright holder.

//ambil element yang dibutuhkan pada waktu mode siang dan malam
const h2 = document.querySelectorAll('section.py-5 h2');
const label = document.querySelectorAll('section.py-5 label');
const skillsh5 = document.querySelectorAll('#skills h5');
const iconGithub = document.querySelector('#projects .github i');
const textGithub = document.querySelector('#projects .card-body span');
const textCipta = document.querySelectorAll('footer .left p');
const lamp = document.querySelector('.fa-toggle-off');
// fungsi addEventListener untuk mengubah mode siang dan malam
lamp.addEventListener('click', function (event) {
    event.preventDefault();

    const body = document.body;
    const isNightMode = body.classList.toggle('night-mode');

    const colors = {
        day: {
            background: '#0C001F',
            text: '#CCD0FF'
        },
        night: {
            background: '#D0B1FF',
            text: '#00098D'
        }
    };

    if (isNightMode) {
        lamp.classList.remove('fa-toggle-on');
        lamp.classList.add('fa-toggle-off');
    } else {
        lamp.classList.remove('fa-toggle-off');
        lamp.classList.add('fa-toggle-on');
    }

    body.style.backgroundColor = isNightMode ? colors.night.background : colors.day.background;
    skillsh5.forEach(l => l.style.color = colors[isNightMode ? 'night' : 'day'].text);
    label.forEach(l => l.style.color = colors[isNightMode ? 'night' : 'day'].text);
    h2.forEach(h => h.style.color = colors[isNightMode ? 'night' : 'day'].text);
    iconGithub.style.color = colors[isNightMode ? 'night' : 'day'].text;
    textGithub.style.color = colors[isNightMode ? 'night' : 'day'].text;
    textCipta.forEach(t => t.style.color = colors[isNightMode ? 'night' : 'day'].text);
});


// DOM
// buat tag li baru
const liBaru = document.createElement('li');
// ambil parent
const ul = document.querySelector('footer .social');
// ambil sibling
const li1 = document.querySelector('.social li:first-child');
// masukkan tag li baru antara parent dengan sibling
ul.insertBefore(liBaru, li1);
// tambah kelas 'icon instagram'
liBaru.setAttribute('class', 'icon instagram');

// buat tag span baru
const spanBaru = document.createElement('span');
// buat teks
const teksSpanBaru = document.createTextNode('classnamesetya');
// masukkan span ke tag li
liBaru.appendChild(spanBaru);
// masukkan teks
spanBaru.appendChild(teksSpanBaru);
// buat kelas 'desc'
spanBaru.setAttribute('class', 'desc');

// buat tag a baru
const aBaru = document.createElement('a');
// ambil parent
const liPertama = document.querySelector('.social li:first-child');
// masukkan tag a baru
liPertama.appendChild(aBaru);
// tambah kelas link
aBaru.setAttribute('class', 'link');
// tambah link href
aBaru.href = 'https://www.instagram.com/classnamesetya/';

// buat tag i baru
const instagram = document.createElement('i');
// ambil parent
const aPertama = document.querySelector('.social li:first-child a');
// masukkan tag i baru
aPertama.appendChild(instagram);
// tambah kelas 'fa-brands fa-instagram'
instagram.setAttribute('class', 'fa-brands fa-instagram');
instagram.style.color = 'yellow';


// ambil parent
const lokasi = document.querySelector('.social li:last-child');
// hapus kelas
lokasi.removeAttribute('class');
// tambah kelas baru
lokasi.setAttribute('class', 'icon github');

// ambil parent
const textGit = document.querySelector('.icon:last-child .desc');
// hapus teks
textGit.innerHTML = '';
// buat teks
textGit.innerHTML = 'setyabudipratama';

// ambil parent
const aGit = document.querySelector('footer li:last-child a');
// tambah teks
aGit.href = 'https://github.com/setyabudipratama/project.git';

// ambil parent
const Git = document.querySelector('footer li:last-child i');
// hapus kelas
Git.removeAttribute('class');
// tambah kelas baru
Git.setAttribute('class', 'fa-brands fa-github');
// ubah warna
Git.style.color = 'white';


// ambil parent
const telepon = document.querySelector('footer .social li:nth-child(3)');
// hapus kelas
telepon.removeAttribute('class');
// tambah kelas baru
telepon.setAttribute('class', 'icon linkIn');

// ambil parent
const textLinkIn = document.querySelector('.icon:nth-child(3) .desc');
// hapus teks
textLinkIn.innerHTML = '';
// buat teks
textLinkIn.innerHTML = 'setya budi';

// ambil parent
const aLinkIn = document.querySelector('footer .social li:nth-child(3) a');
// tambah teks
aLinkIn.href = 'https://www.linkedin.com/in/setya-budi-b08623317/';

// ambil parent
const linkIn = document.querySelector('footer .social li:nth-child(3) i');
// hapus kelas
linkIn.removeAttribute('class');
// tambah kelas baru
linkIn.setAttribute('class', 'fa-brands fa-linkedin');
// ubah warna
linkIn.style.color = 'skyblue';

// Copyright (C) 2024 Setya Budi Pratama

// All rights reserved.

// This software is proprietary and confidential. Unauthorized copying of this file, via any medium, is strictly prohibited.
// You may not decompile, reverse engineer, disassemble, or otherwise attempt to derive the source code of this software.

// This software may not be used, copied, modified, or distributed in any form without the prior written consent of the copyright holder.

// ambil parent
const kontak = document.querySelector('#contact form');
// tambah id
kontak.setAttribute('id', 'whatsapp');

// aktifkan contact
document.getElementById('whatsapp').addEventListener('submit', function (e) {
    e.preventDefault();

    // ambil value
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // encode untuk mengirimkan pesan
    const whatsappPesan = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    const nmrWhatsapp = "6282264244554";

    // url
    const url = `https://wa.me/${nmrWhatsapp}?text=${whatsappPesan}`;
    // open whatsapp
    window.open(url);
});

// Copyright (C) 2024 Setya Budi Pratama

// All rights reserved.

// This software is proprietary and confidential. Unauthorized copying of this file, via any medium, is strictly prohibited.
// You may not decompile, reverse engineer, disassemble, or otherwise attempt to derive the source code of this software.

// This software may not be used, copied, modified, or distributed in any form without the prior written consent of the copyright holder.

// project lain
const ejen = document.querySelector('#projects .card:first-child');
ejen.addEventListener('dblclick', function () {
    window.location.href = 'https://setyabudipratama.github.io/ejen';
});

const furniture = document.querySelector('#projects .card:nth-child(2)');
furniture.addEventListener('dblclick', function () {
    window.location.href = 'https://setyabudipratama.github.io/furniture';
});

const property = document.querySelector('#projects .card:nth-child(3)');
property.addEventListener('dblclick', function () {
    window.location.href = 'https://setyabudipratama.github.io/property';
});

const projects = document.getElementById('github');
projects.addEventListener('dblclick', function () {
    window.location.href = 'https://github.com/setyabudipratama/project.git';
});


// DOM
// update skill html, css dan javascript
const htmlText = document.querySelector('#skills .icon:first-child h5:last-child');
const cssText = document.querySelector('#skills .icon:nth-child(2) h5:last-child');
const jsText = document.querySelector('#skills .icon:nth-child(3) h5:last-child');
htmlText.innerHTML = '95%';
cssText.innerHTML = '95%';
jsText.innerHTML = '75%';

const htmlValue = document.querySelector('#skills .icon:first-child #skills-progress-fill');
const cssValue = document.querySelector('#skills .icon:nth-child(2) #skills-progress-fill');
const jsValue = document.querySelector('#skills .icon:nth-child(3) #skills-progress-fill');
htmlValue.style.width = '95%';
cssValue.style.width = '95%';
jsValue.style.width = '75%';

// border radius class box
const boxAboutUs = document.querySelector('#about .box');
const profilAboutUs = document.querySelector('#about .box .profil');
boxAboutUs.style.animation = 'morph 4s linear infinite';
profilAboutUs.style.animation = 'morph 4s linear infinite';
profilAboutUs.style.backgroundImage = 'linear-gradient(145deg, darkblue 0%, blue 50%, lightblue 100%)';
const style = document.createElement('style');
style.innerHTML = `
    @keyframes morph {
        0%, 100% {
            border-radius: 50%;
        }
        25% {
            border-radius: 30% 70% 70% 30% / 30% 70% 30% 70%;
        }
        50% {
            border-radius: 70% 30% 30% 70% / 70% 30% 70% 30%;
        }
        75% {
            border-radius: 50% 50% 30% 50%;
        }
    }
`;
document.head.appendChild(style);

// rubah ukuran width
const pAboutUs = document.querySelector('#about .box p');

// hover card project
const cardProject = document.querySelectorAll('#projects .card');
cardProject.forEach(card => {
    Object.assign(card.style, {
        cursor: 'pointer',
        position: 'relative',
        top: '5%',
        transition: 'all 0.5s',
    });
});

cardProject.forEach(card => {
    card.addEventListener('mouseenter', function () {
        card.style.transform = 'translateY(-1.5rem)';
        const imgProject = card.querySelectorAll('.image img');
        imgProject.forEach(img => {
            img.style.scale = '1';
        });
    });
    card.addEventListener('mouseleave', function () {
        card.style.transform = 'translateY(0)';
    });
});

const slideProject = document.querySelector('#projects .slide');
Object.assign(slideProject.style, {
    height: '80vh',
});

// efek bayangan skills
const skillIcons = document.querySelectorAll('#skills .icon');
skillIcons.forEach(icon => {
    Object.assign(icon.style, {
        webkitBoxReflect: 'below 5px linear-gradient(transparent, #0005)',
    });
});

// box shadow
const btnContact = document.querySelector('#contact .btn');
btnContact.style.boxShadow = '0 0 10px blue, -0 -0 10px blue';
btnContact.addEventListener('mouseenter', function () {
    btnContact.style.boxShadow = '0 0 10px cyan, -0 -0 10px cyan';
});

btnContact.addEventListener('mouseleave', function () {
    btnContact.style.boxShadow = '0 0 10px blue, -0 -0 10px blue';
});

btnContact.addEventListener('click', function () {
    btnContact.style.boxShadow = '0 0 10px cyan, -0 -0 10px cyan';
});

function applyResponsiveStyles() {
    if (window.innerWidth < 767) {
        pAboutUs.style.width = '210px';
        Object.assign(slideProject.style, {
            height: '60vh',
        });
        skillIcons.forEach(icon => {
            Object.assign(icon.style, {
                webkitBoxReflect: 'right 1px linear-gradient(transparent, #0005)',
            });
        });
    }
}

// panggil fungsi
window.onload = applyResponsiveStyles;

// Copyright (C) 2024 Setya Budi Pratama

// All rights reserved.

// This software is proprietary and confidential. Unauthorized copying of this file, via any medium, is strictly prohibited.
// You may not decompile, reverse engineer, disassemble, or otherwise attempt to derive the source code of this software.

// This software may not be used, copied, modified, or distributed in any form without the prior written consent of the copyright holder.


// DOM
// card baru
const projectSlide = document.querySelector('#projects .slide');
const githubIcon = document.getElementById('github');

// buat card baru
const cardBaru = document.createElement('div');
cardBaru.setAttribute('class', 'card');
// masukkan card baru
projectSlide.insertBefore(cardBaru, githubIcon);
cardBaru.style.position = 'relative';
cardBaru.style.top = '5%';

// buat tag i
const iBaru = document.createElement('i');
iBaru.setAttribute('class', 'fa-solid fa-4');
// masukkan i
cardBaru.appendChild(iBaru);

// element class image
const imageBaru = document.createElement('div');
imageBaru.setAttribute('class', 'image');
// masukkan image
cardBaru.appendChild(imageBaru);

// element img
const imgBaru = document.createElement('img');
imgBaru.setAttribute('src', 'gambar/website company.png');
imgBaru.setAttribute('alt', 'image');
// masukkan img
imageBaru.appendChild(imgBaru);

// element class card-body
const cardBodyBaru = document.createElement('div');
cardBodyBaru.setAttribute('class', 'card-body');
// masukkan card-body
cardBaru.appendChild(cardBodyBaru);

// tag h5
const h5Baru = document.createElement('h5');
h5Baru.setAttribute('class', 'card-title');
h5Baru.innerHTML = 'Website Company';
// masukkan h5
cardBodyBaru.appendChild(h5Baru);

// tag p
const pBaru = document.createElement('p');
pBaru.classList.add('card-text');
pBaru.innerText = `Membuat pemrograman UI website company menggunakan pemrograman html, css (bootstrap 5)
            dan javascript. (double-click to see result)`;
// masukkan p
cardBodyBaru.appendChild(pBaru);

cardBaru.addEventListener('mouseenter', function () {
    cardBaru.style.transition = 'all 0.5s';
    cardBaru.style.transform = 'translateY(-1.5rem)';
    imgBaru.style.scale = '1';
});
cardBaru.addEventListener('mouseleave', function () {
    cardBaru.style.transform = 'translateY(0)';
});

cardBaru.addEventListener('dblclick', function () {
    window.location.href = 'https://setyabudipratama.github.io/company';
});


// DOM
// animation header
const textHeader = document.querySelector('header .text');
const h2Header = document.querySelector('header .text h2');
const pHeader = document.querySelector('header .text p');
Object.assign(textHeader.style, {
    background: 'none',
    backdropFilter: 'none',
})
h2Header.style.animation = 'shake 2s ease-in-out infinite';
pHeader.style.animation = 'shake 2s ease-in-out infinite';
const style2 = document.createElement('style');
style2.innerHTML = `
    @keyframes shake {
    0%, 100% {
        transform: translateY(-5px);
    }
    50% {
        transform: translateY(5px);
    }
}`;
document.head.appendChild(style2);
