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

// DOM
document.querySelector('.background').remove();
const spanBg = document.querySelectorAll('.background span');
spanBg.forEach(span => {
    span.remove();
});
const body = document.querySelector('body');
body.style.background = 'transparent';

(async () => {
    const loadScript = async (src, integrity) => {

        // buat elemen script
        const script = document.createElement('script');
        script.src = src;
        script.integrity = integrity,
        script.crossOrigin = 'anonymous',
        script.referrerPolicy = 'no-referrer'

        // menambahkan ke head
        document.head.appendChild(script);

        // menunggu script selesai dimuat
        return new Promise((resolve, reject) => {
            script.onload = resolve; // jika berhasil
            script.onerror = () => reject(new Error(`Gagal memuat ${src}`)); // jika gagal
        });
    };

    try {
        // memuat library three.js syarat untuk vanta.js
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js", 'sha512-334uBDwY0iZ2TklV1OtDtBW9vp7jjP7SWRzT7Ehu1fdtPIjTpCwTSFb8HI/YBau9L1/kRBEOALrS229Kry4yFQ==');
        // memuat library vanta.js
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.net.min.js", 'sha512-lH/5/byfwH0bqySiiSINJJoEoWFEBGKgOwsnAlZZPviNJI1DDBVXjPHgEkM0fowfOp6NMBAN4ROAYjx+uEkEjQ==');

        // elemn div
        const vantaBg = document.createElement('div');
        // console.log(vantaBg);
        vantaBg.setAttribute('id', 'vanta-bg');
        document.body.appendChild(vantaBg);
        Object.assign(vantaBg.style, {
            width: '100%',
            height: '100%',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '-1'
        });

        // inisiasi evek vanta
        VANTA.NET({
            el: vantaBg,
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            showDots: true,
            color: 'black',
            backgroundColor: 'skyblue',
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            maxDistance: 30.00,
            spacing: 20.00,
            point: 10.00
        });
    } catch (error) {
        console.error('Failed to load script:', error);
    }
})();

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
    if (body.classList.contains('night-mode')) {
        Object.assign(body.style, {
            background: 'rgba(0, 0, 0, 0.7)',
        })
    } else {
        Object.assign(body.style, {
            background: 'transparent',
        })
    }

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

    lamp.classList.toggle('fa-toggle-on', !isNightMode);
    lamp.classList.toggle('fa-toggle-off', isNightMode);

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

const projects = document.getElementById('github');
projects.addEventListener('click', function () {
    window.location.href = 'https://github.com/setyabudipratama/component.git';
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
const styleHeader = document.createElement('style');
styleHeader.innerHTML = `
    @keyframes shake {
    0%, 100% {
        transform: translateY(-5px);
    }
    50% {
        transform: translateY(5px);
    }
}`;
document.head.appendChild(styleHeader);

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

// DOM
// ganti hover card project
// project 1
const cardProjectHover1 = document.querySelector('#projects .card');
Object.assign(cardProjectHover1.style, {
    position: 'relative',
    top: '20%',
    width: '310px',
    height: '140px',
    cursor: 'default',
    transition: 'all 0.5s',
    boxShadow: 'none',
    border: 'none'
});

const iCardHover1 = document.querySelector('#projects .card i');
iCardHover1.remove();

const imageCardHover1 = document.querySelector('#projects .card .image');
Object.assign(imageCardHover1.style, {
    position: 'relative',
    top: '0',
    width: '100%',
    height: '100%',
    zIndex: '1',
    borderRadius: '5px',
    transition: 'all 0.5s ease',
    boxShadow: '5px 5px 10px black'
});

const imgProjectHover1 = document.querySelector('#projects .card .image img');
Object.assign(imgProjectHover1.style, {
    width: '100%',
    height: '100%',
    margin: '0',
    objectFit: 'cover',
    borderRadius: '5px'
});

const cardBodyProjectHover1 = document.querySelector('#projects .card .card-body');
Object.assign(cardBodyProjectHover1.style, {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '100%',
    zIndex: '0',
    backgroundColor: '#696ca7',
    borderRadius: '5px',
    transition: 'all 0.5s ease',
});

const h5ProjectHover1 = document.querySelector('#projects .card h5');
Object.assign(h5ProjectHover1.style, {
    position: 'relative',
    top: '27%',
    color: '#ffffff'
});

const pProjectHover1 = document.querySelector('#projects .card p');
pProjectHover1.remove();

const buttonCard1 = document.createElement('button');
buttonCard1.appendChild(document.createTextNode('See Result'));
h5ProjectHover1.after(buttonCard1);
Object.assign(buttonCard1.style, {
    position: 'relative',
    top: '20%',
    color: '#696ca7',
    width: '100px',
    height: '30px',
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    transition: 'all 0.3s ease',
});
buttonCard1.addEventListener('click', function () {
    window.location.href = 'https://setyabudipratama.github.io/ejen';
});
buttonCard1.addEventListener('mouseenter', function () {
    Object.assign(buttonCard1.style, {
        backgroundColor: 'transparent',
        color: '#ffffff'
    });
});
buttonCard1.addEventListener('mouseleave', function () {
    Object.assign(buttonCard1.style, {
        backgroundColor: '#ffffff',
        color: '#696ca7'
    });
});

cardProjectHover1.addEventListener('mouseenter', function () {
    Object.assign(cardProjectHover1.style, {
        transform: 'translateY(-1.5rem)'
    });
    Object.assign(cardBodyProjectHover1.style, {
        transform: 'translateY(70px)',
    });
    Object.assign(imageCardHover1.style, {
        borderRadius: '5px 5px 0 0',
        boxShadow: 'none'
    });
    Object.assign(imgProjectHover1.style, {
        borderRadius: '5px 5px 0 0',
        scale: '1'
    });
});
cardProjectHover1.addEventListener('mouseleave', function () {
    Object.assign(cardProjectHover1.style, {
        transform: 'translateY(0)'
    });
    Object.assign(cardBodyProjectHover1.style, {
        borderRadius: '5px',
        transform: 'translate(0)',
    });
    Object.assign(imageCardHover1.style, {
        borderRadius: '5px',
        boxShadow: '5px 5px 10px black'
    });
    Object.assign(imgProjectHover1.style, {
        borderRadius: '5px',
    });
});


// project 2
const cardProjectHover2 = document.querySelector('#projects .card:nth-child(2)');
Object.assign(cardProjectHover2.style, {
    position: 'relative',
    top: '20%',
    width: '310px',
    height: '140px',
    cursor: 'default',
    transition: 'all 0.5s',
    boxShadow: 'none',
    border: 'none'
});

const iCardHover2 = document.querySelector('#projects .card:nth-child(2) i');
iCardHover2.remove();

const imageCardHover2 = document.querySelector('#projects .card:nth-child(2) .image');
Object.assign(imageCardHover2.style, {
    position: 'relative',
    top: '0',
    width: '100%',
    height: '100%',
    zIndex: '1',
    borderRadius: '5px',
    transition: 'all 0.5s ease',
    boxShadow: '5px 5px 10px black'
});

const imgProjectHover2 = document.querySelector('#projects .card:nth-child(2) .image img');
Object.assign(imgProjectHover2.style, {
    width: '100%',
    height: '100%',
    margin: '0',
    objectFit: 'cover',
});

const cardBodyProjectHover2 = document.querySelector('#projects .card:nth-child(2) .card-body');
Object.assign(cardBodyProjectHover2.style, {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '100%',
    zIndex: '0',
    backgroundColor: '#696ca7',
    borderRadius: '5px',
    transition: 'all 0.5s ease',
});

const h5ProjectHover2 = document.querySelector('#projects .card:nth-child(2) h5');
Object.assign(h5ProjectHover2.style, {
    position: 'relative',
    top: '27%',
    color: '#ffffff'
});

const pProjectHover2 = document.querySelector('#projects .card:nth-child(2) p');
pProjectHover2.remove();

const buttonCard2 = document.createElement('button');
buttonCard2.appendChild(document.createTextNode('See Result'));
h5ProjectHover2.after(buttonCard2);
Object.assign(buttonCard2.style, {
    position: 'relative',
    top: '20%',
    color: '#696ca7',
    width: '100px',
    height: '30px',
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    transition: 'all 0.3s ease',
});
buttonCard2.addEventListener('click', function () {
    window.location.href = 'https://setyabudipratama.github.io/furniture';
});
buttonCard2.addEventListener('mouseenter', function () {
    Object.assign(buttonCard2.style, {
        backgroundColor: 'transparent',
        color: '#ffffff'
    });
});
buttonCard2.addEventListener('mouseleave', function () {
    Object.assign(buttonCard2.style, {
        backgroundColor: '#ffffff',
        color: '#696ca7'
    });
});

cardProjectHover2.addEventListener('mouseenter', function () {
    Object.assign(cardProjectHover2.style, {
        transform: 'translateY(-1.5rem)'
    });
    Object.assign(cardBodyProjectHover2.style, {
        transform: 'translateY(70px)',
    });
    Object.assign(imageCardHover2.style, {
        borderRadius: '5px 5px 0 0',
        boxShadow: 'none'
    });
    Object.assign(imgProjectHover2.style, {
        borderRadius: '5px 5px 0 0',
        scale: '1'
    });
});
cardProjectHover2.addEventListener('mouseleave', function () {
    Object.assign(cardProjectHover2.style, {
        transform: 'translateY(0)'
    });
    Object.assign(cardBodyProjectHover2.style, {
        borderRadius: '5px',
        transform: 'translate(0)',
    });
    Object.assign(imageCardHover2.style, {
        borderRadius: '5px',
        boxShadow: '5px 5px 10px black'
    });
    Object.assign(imgProjectHover2.style, {
        borderRadius: '5px',
    });
});


// project 3
const cardProjectHover3 = document.querySelector('#projects .card:nth-child(3)');
Object.assign(cardProjectHover3.style, {
    position: 'relative',
    top: '20%',
    width: '310px',
    height: '140px',
    cursor: 'default',
    transition: 'all 0.5s',
    boxShadow: 'none',
    border: 'none'
});

const iCardHover3 = document.querySelector('#projects .card:nth-child(3) i');
iCardHover3.remove();

const imageCardHover3 = document.querySelector('#projects .card:nth-child(3) .image');
Object.assign(imageCardHover3.style, {
    position: 'relative',
    top: '0',
    width: '100%',
    height: '100%',
    zIndex: '1',
    borderRadius: '5px',
    transition: 'all 0.5s ease',
    boxShadow: '5px 5px 10px black'
});

const imgProjectHover3 = document.querySelector('#projects .card:nth-child(3) .image img');
Object.assign(imgProjectHover3.style, {
    width: '100%',
    height: '100%',
    margin: '0',
    objectFit: 'cover',
});

const cardBodyProjectHover3 = document.querySelector('#projects .card:nth-child(3) .card-body');
Object.assign(cardBodyProjectHover3.style, {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '100%',
    zIndex: '0',
    backgroundColor: '#696ca7',
    borderRadius: '5px',
    transition: 'all 0.5s ease',
});

const h5ProjectHover3 = document.querySelector('#projects .card:nth-child(3) h5');
Object.assign(h5ProjectHover3.style, {
    position: 'relative',
    top: '27%',
    color: '#ffffff'
});

const pProjectHover3 = document.querySelector('#projects .card:nth-child(3) p');
pProjectHover3.remove();

const buttonCard3 = document.createElement('button');
buttonCard3.appendChild(document.createTextNode('See Result'));
h5ProjectHover3.after(buttonCard3);
Object.assign(buttonCard3.style, {
    position: 'relative',
    top: '20%',
    color: '#696ca7',
    width: '100px',
    height: '30px',
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    transition: 'all 0.3s ease',
});
buttonCard3.addEventListener('click', function () {
    window.location.href = 'https://setyabudipratama.github.io/property';
});
buttonCard3.addEventListener('mouseenter', function () {
    Object.assign(buttonCard3.style, {
        backgroundColor: 'transparent',
        color: '#ffffff'
    });
});
buttonCard3.addEventListener('mouseleave', function () {
    Object.assign(buttonCard3.style, {
        backgroundColor: '#ffffff',
        color: '#696ca7'
    });
});

cardProjectHover3.addEventListener('mouseenter', function () {
    Object.assign(cardProjectHover3.style, {
        transform: 'translateY(-1.5rem)'
    });
    Object.assign(cardBodyProjectHover3.style, {
        transform: 'translateY(70px)',
    });
    Object.assign(imageCardHover3.style, {
        borderRadius: '5px 5px 0 0',
        boxShadow: 'none'
    });
    Object.assign(imgProjectHover3.style, {
        borderRadius: '5px 5px 0 0',
        scale: '1'
    });
});
cardProjectHover3.addEventListener('mouseleave', function () {
    Object.assign(cardProjectHover3.style, {
        transform: 'translateY(0)'
    });
    Object.assign(cardBodyProjectHover3.style, {
        borderRadius: '5px',
        transform: 'translate(0)',
    });
    Object.assign(imageCardHover3.style, {
        borderRadius: '5px',
        boxShadow: '5px 5px 10px black'
    });
    Object.assign(imgProjectHover3.style, {
        borderRadius: '5px',
    });
});

const github = document.querySelector('#projects .github');
const iGithub = document.querySelector('#projects .image .fa-square-github');
const spanGithub = document.querySelector('#projects .github .card-body span');
github.remove();

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
        Object.assign(h2Header.style, {
            fontSize: '1rem'
        });
        Object.assign(pHeader.style, {
            fontSize: '0.8rem'
        });
        pAboutUs.style.width = '210px';
        Object.assign(slideProject.style, {
            height: '40vh',
        });
        skillIcons.forEach(icon => {
            Object.assign(icon.style, {
                webkitBoxReflect: 'right 1px linear-gradient(transparent, #0005)',
            });
        });
        Object.assign(iGithub.style, {
            fontSize: '7rem',
            position: 'relative',
            top: '55%'
        });
        Object.assign(spanGithub.style, {
            position: 'relative',
            top: '40%',
            fontSize: '1.2rem'
        });
        Object.assign(github.style, {
            width: '200px',
            height: '240px'
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
// card Project baru
const projectSlide = document.querySelector('#projects .slide');
const githubIcon = document.getElementById('github');


// card baru
const cardBaru = document.createElement('div');
cardBaru.setAttribute('class', 'card');
// masukkan card baru
projectSlide.insertBefore(cardBaru, githubIcon);
Object.assign(cardBaru.style, {
    position: 'relative',
    top: '20%',
    width: '310px',
    height: '140px',
    cursor: 'default',
    transition: 'all 0.5s',
    boxShadow: 'none',
    border: 'none'
});

// element class image
const imageBaru = document.createElement('div');
imageBaru.setAttribute('class', 'image');
// masukkan image
cardBaru.appendChild(imageBaru);
Object.assign(imageBaru.style, {
    position: 'relative',
    top: '0',
    width: '100%',
    height: '100%',
    zIndex: '1',
    borderRadius: '5px',
    transition: 'all 0.5s ease',
    boxShadow: '5px 5px 10px black'
});

// tag img
const imgBaru = document.createElement('img');
imgBaru.setAttribute('src', 'gambar/website company.png');
imgBaru.setAttribute('alt', 'image');
// masukkan img
imageBaru.appendChild(imgBaru);
Object.assign(imgBaru.style, {
    width: '100%',
    height: '100%',
    margin: '0',
    objectFit: 'cover',
    borderRadius: '5px',
});

// element class card-body
const cardBodyBaru = document.createElement('div');
cardBodyBaru.setAttribute('class', 'card-body');
// masukkan card-body
cardBaru.appendChild(cardBodyBaru);
Object.assign(cardBodyBaru.style, {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '100%',
    zIndex: '0',
    backgroundColor: '#696ca7',
    borderRadius: '5px',
    transition: 'all 0.5s ease',
});

// tag h5
const h5Baru = document.createElement('h5');
h5Baru.setAttribute('class', 'card-title');
h5Baru.innerHTML = 'Website Company';
// masukkan h5
cardBodyBaru.appendChild(h5Baru);
Object.assign(h5Baru.style, {
    position: 'relative',
    top: '27%',
    color: '#ffffff'
});

// tag button
const buttonBaru = document.createElement('button');
buttonBaru.appendChild(document.createTextNode('See Result'));
h5Baru.after(buttonBaru);
Object.assign(buttonBaru.style, {
    position: 'relative',
    top: '20%',
    color: '#696ca7',
    width: '100px',
    height: '30px',
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    transition: 'all 0.3s ease',
});
buttonBaru.addEventListener('click', function () {
    window.location.href = 'https://setyabudipratama.github.io/company';
});
buttonBaru.addEventListener('mouseenter', function () {
    Object.assign(imgBaru.style, {
        transform: 'scale(1)',
    });
    Object.assign(buttonBaru.style, {
        backgroundColor: 'transparent',
        color: '#ffffff'
    });
});
buttonBaru.addEventListener('mouseleave', function () {
    Object.assign(buttonBaru.style, {
        backgroundColor: '#ffffff',
        color: '#696ca7'
    });
});

cardBaru.addEventListener('mouseenter', function () {
    Object.assign(cardBaru.style, {
        transform: 'translateY(-1.5rem)'
    });
    Object.assign(cardBodyBaru.style, {
        transform: 'translateY(70px)',
    });
    Object.assign(imageBaru.style, {
        borderRadius: '5px 5px 0 0',
        boxShadow: 'none'
    });
    Object.assign(imgBaru.style, {
        borderRadius: '5px 5px 0 0',
        scale: '1'
    });
});
cardBaru.addEventListener('mouseleave', function () {
    Object.assign(cardBaru.style, {
        transform: 'translateY(0)'
    });
    Object.assign(cardBodyBaru.style, {
        borderRadius: '5px',
        transform: 'translate(0)',
    });
    Object.assign(imageBaru.style, {
        borderRadius: '5px',
        boxShadow: '5px 5px 10px black'
    });
    Object.assign(imgBaru.style, {
        borderRadius: '5px',
    });
});


// card baru 2
const cardBaru2 = document.createElement('div');
cardBaru2.setAttribute('class', 'card');
// masukkan card baru
projectSlide.insertBefore(cardBaru2, githubIcon);
Object.assign(cardBaru2.style, {
    position: 'relative',
    top: '20%',
    width: '310px',
    height: '140px',
    cursor: 'default',
    transition: 'all 0.5s',
    boxShadow: 'none',
    border: 'none'
});

// element class image
const imageBaru2 = document.createElement('div');
imageBaru2.setAttribute('class', 'image');
// masukkan image
cardBaru2.appendChild(imageBaru2);
Object.assign(imageBaru2.style, {
    position: 'relative',
    top: '0',
    width: '100%',
    height: '100%',
    zIndex: '1',
    borderRadius: '5px',
    transition: 'all 0.5s ease',
    boxShadow: '5px 5px 10px black'
});

// tag img
const imgBaru2 = document.createElement('img');
imgBaru2.setAttribute('src', 'gambar/website wisata.png');
imgBaru2.setAttribute('alt', 'image');
// masukkan img
imageBaru2.appendChild(imgBaru2);
Object.assign(imgBaru2.style, {
    width: '100%',
    height: '100%',
    margin: '0',
    objectFit: 'cover',
    borderRadius: '5px',
});

// element class card-body
const cardBodyBaru2 = document.createElement('div');
cardBodyBaru2.setAttribute('class', 'card-body');
// masukkan card-body
cardBaru2.appendChild(cardBodyBaru2);
Object.assign(cardBodyBaru2.style, {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '100%',
    zIndex: '0',
    backgroundColor: '#696ca7',
    borderRadius: '5px',
    transition: 'all 0.5s ease',
});

// tag h5
const h5Baru2 = document.createElement('h5');
h5Baru2.setAttribute('class', 'card-title');
h5Baru2.innerHTML = 'Website Wisata';
// masukkan h5
cardBodyBaru2.appendChild(h5Baru2);
Object.assign(h5Baru2.style, {
    position: 'relative',
    top: '27%',
    color: '#ffffff'
});

// tag button
const buttonBaru2 = document.createElement('button');
buttonBaru2.appendChild(document.createTextNode('See Result'));
h5Baru2.after(buttonBaru2);
Object.assign(buttonBaru2.style, {
    position: 'relative',
    top: '20%',
    color: '#696ca7',
    width: '100px',
    height: '30px',
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    transition: 'all 0.3s ease',
});
buttonBaru2.addEventListener('click', function () {
    window.location.href = 'https://setyabudipratama.github.io/wisata';
});
buttonBaru2.addEventListener('mouseenter', function () {
    Object.assign(imgBaru2.style, {
        transform: 'scale(1)',
    });
    Object.assign(buttonBaru2.style, {
        backgroundColor: 'transparent',
        color: '#ffffff'
    });
});
buttonBaru2.addEventListener('mouseleave', function () {
    Object.assign(buttonBaru2.style, {
        backgroundColor: '#ffffff',
        color: '#696ca7'
    });
});

cardBaru2.addEventListener('mouseenter', function () {
    Object.assign(cardBaru2.style, {
        transform: 'translateY(-1.5rem)'
    });
    Object.assign(cardBodyBaru2.style, {
        transform: 'translateY(70px)',
    });
    Object.assign(imageBaru2.style, {
        borderRadius: '5px 5px 0 0',
        boxShadow: 'none'
    });
    Object.assign(imgBaru2.style, {
        borderRadius: '5px 5px 0 0',
        scale: '1'
    });
});
cardBaru2.addEventListener('mouseleave', function () {
    Object.assign(cardBaru2.style, {
        transform: 'translateY(0)'
    });
    Object.assign(cardBodyBaru2.style, {
        borderRadius: '5px',
        transform: 'translate(0)',
    });
    Object.assign(imageBaru2.style, {
        borderRadius: '5px',
        boxShadow: '5px 5px 10px black'
    });
    Object.assign(imgBaru2.style, {
        borderRadius: '5px',
    });
});


// card baru 3
const cardBaru3 = document.createElement('div');
cardBaru3.setAttribute('class', 'card');
// masukkan card baru
projectSlide.insertBefore(cardBaru3, githubIcon);
Object.assign(cardBaru3.style, {
    position: 'relative',
    top: '20%',
    width: '310px',
    height: '140px',
    cursor: 'default',
    transition: 'all 0.5s',
    boxShadow: 'none',
    border: 'none'
});

// element class image
const imageBaru3 = document.createElement('div');
imageBaru3.setAttribute('class', 'image');
// masukkan image
cardBaru3.appendChild(imageBaru3);
Object.assign(imageBaru3.style, {
    position: 'relative',
    top: '0',
    width: '100%',
    height: '100%',
    zIndex: '1',
    borderRadius: '5px',
    transition: 'all 0.5s ease',
    boxShadow: '5px 5px 10px black'
});

// tag img
const imgBaru3 = document.createElement('img');
imgBaru3.setAttribute('src', 'gambar/website mobil.png');
imgBaru3.setAttribute('alt', 'image');
// masukkan img
imageBaru3.appendChild(imgBaru3);
Object.assign(imgBaru3.style, {
    width: '100%',
    height: '100%',
    margin: '0',
    objectFit: 'cover',
    borderRadius: '5px',
});

// element class card-body
const cardBodyBaru3 = document.createElement('div');
cardBodyBaru3.setAttribute('class', 'card-body');
// masukkan card-body
cardBaru3.appendChild(cardBodyBaru3);
Object.assign(cardBodyBaru3.style, {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '100%',
    zIndex: '0',
    backgroundColor: '#696ca7',
    borderRadius: '5px',
    transition: 'all 0.5s ease',
});

// tag h5
const h5Baru3 = document.createElement('h5');
h5Baru3.setAttribute('class', 'card-title');
h5Baru3.innerHTML = 'Website mobil';
// masukkan h5
cardBodyBaru3.appendChild(h5Baru3);
Object.assign(h5Baru3.style, {
    position: 'relative',
    top: '27%',
    color: '#ffffff'
});

// tag button
const buttonBaru3 = document.createElement('button');
buttonBaru3.appendChild(document.createTextNode('See Result'));
h5Baru3.after(buttonBaru3);
Object.assign(buttonBaru3.style, {
    position: 'relative',
    top: '20%',
    color: '#696ca7',
    width: '100px',
    height: '30px',
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    transition: 'all 0.3s ease',
});
buttonBaru3.addEventListener('click', function () {
    window.location.href = 'https://setyabudipratama.github.io/car';
});
buttonBaru3.addEventListener('mouseenter', function () {
    Object.assign(imgBaru3.style, {
        transform: 'scale(1)',
    });
    Object.assign(buttonBaru3.style, {
        backgroundColor: 'transparent',
        color: '#ffffff'
    });
});
buttonBaru3.addEventListener('mouseleave', function () {
    Object.assign(buttonBaru3.style, {
        backgroundColor: '#ffffff',
        color: '#696ca7'
    });
});

cardBaru3.addEventListener('mouseenter', function () {
    Object.assign(cardBaru3.style, {
        transform: 'translateY(-1.5rem)'
    });
    Object.assign(cardBodyBaru3.style, {
        transform: 'translateY(70px)',
    });
    Object.assign(imageBaru3.style, {
        borderRadius: '5px 5px 0 0',
        boxShadow: 'none'
    });
    Object.assign(imgBaru3.style, {
        borderRadius: '5px 5px 0 0',
        scale: '1'
    });
});
cardBaru3.addEventListener('mouseleave', function () {
    Object.assign(cardBaru3.style, {
        transform: 'translateY(0)'
    });
    Object.assign(cardBodyBaru3.style, {
        borderRadius: '5px',
        transform: 'translate(0)',
    });
    Object.assign(imageBaru3.style, {
        borderRadius: '5px',
        boxShadow: '5px 5px 10px black'
    });
    Object.assign(imgBaru3.style, {
        borderRadius: '5px',
    });
});


// Copyright (C) 2024 Setya Budi Pratama

// All rights reserved.

// This software is proprietary and confidential. Unauthorized copying of this file, via any medium, is strictly prohibited.
// You may not decompile, reverse engineer, disassemble, or otherwise attempt to derive the source code of this software.

// This software may not be used, copied, modified, or distributed in any form without the prior written consent of the copyright holder.

// DOM
// aktif hanya untuk website dengan perubahan baru
// project 1
// const cardProject1 = document.querySelector('#projects .card');
// Object.assign(cardProject1.style, {
//     border: '5px solid',
//     animation: 'animateSpin 4s linear infinite'
// });
// imageCardHover1.style.boxShadow = 'none';
// cardProjectHover1.addEventListener('mouseenter', function () {
//     imageCardHover1.style.boxShadow = 'none';
// });
// cardProjectHover1.addEventListener('mouseleave', function () {
//     imageCardHover1.style.boxShadow = 'none';
// });
// const style1 = document.createElement('style');
// style1.innerHTML = `
//     @keyframes animateSpin {
//     0% {
//         border-color: yellow;
//         /* warna border berubah */
//     }
//     30% {
//         border-color: lightblue;
//     }
//     57% {
//         border-color: blue;
//     }
//     77% {
//         border-color: purple;
//     }
//     100% {
//         border-color: yellow;
//     }
// }`;
// document.head.appendChild(style);

// project 2
// const cardProject2 = document.querySelector('#projects .card:nth-child(2)');
// Object.assign(cardProject2.style, {
//     border: '5px solid',
//     animation: 'animateSpin 4s linear infinite'
// });
// imageCardHover2.style.boxShadow = 'none';
// cardProjectHover2.addEventListener('mouseenter', function () {
//     imageCardHover2.style.boxShadow = 'none';
// });
// cardProjectHover2.addEventListener('mouseleave', function () {
//     imageCardHover2.style.boxShadow = 'none';
// });
// const style2 = document.createElement('style');
// style2.innerHTML = `
//     @keyframes animateSpin {
//     0% {
//         border-color: yellow;
//         /* warna border berubah */
//     }
//     30% {
//         border-color: lightblue;
//     }
//     57% {
//         border-color: blue;
//     }
//     77% {
//         border-color: purple;
//     }
//     100% {
//         border-color: yellow;
//     }
// }`;
// document.head.appendChild(style);

// project 3
// const cardProject3 = document.querySelector('#projects .card:nth-child(3)');
// Object.assign(cardProject3.style, {
//     border: '5px solid',
//     animation: 'animateSpin 4s linear infinite'
// });
// imageCardHover3.style.boxShadow = 'none';
// cardProjectHover3.addEventListener('mouseenter', function () {
//     imageCardHover3.style.boxShadow = 'none';
// });
// cardProjectHover3.addEventListener('mouseleave', function () {
//     imageCardHover3.style.boxShadow = 'none';
// });
// const style3 = document.createElement('style');
// style3.innerHTML = `
//     @keyframes animateSpin {
//     0% {
//         border-color: yellow;
//         /* warna border berubah */
//     }
//     30% {
//         border-color: lightblue;
//     }
//     57% {
//         border-color: blue;
//     }
//     77% {
//         border-color: purple;
//     }
//     100% {
//         border-color: yellow;
//     }
// }`;
// document.head.appendChild(style);

// project 4
// const cardProject4 = document.querySelector('#projects .card:nth-child(4)');
// Object.assign(cardProject4.style, {
//     border: '5px solid',
//     animation: 'animateSpin 4s linear infinite'
// });
// imageBaru.style.boxShadow = 'none';
// cardBaru.addEventListener('mouseenter', function () {
//     imageBaru.style.boxShadow = 'none';
// });
// cardBaru.addEventListener('mouseleave', function () {
//     imageBaru.style.boxShadow = 'none';
// });
// const style4 = document.createElement('style');
// style4.innerHTML = `
//     @keyframes animateSpin {
//     0% {
//         border-color: yellow;
//         /* warna border berubah */
//     }
//     30% {
//         border-color: lightblue;
//     }
//     57% {
//         border-color: blue;
//     }
//     77% {
//         border-color: purple;
//     }
//     100% {
//         border-color: yellow;
//     }
// }`;
// document.head.appendChild(style);

// project 5
// const cardProject5 = document.querySelector('#projects .card:nth-child(5)');
// Object.assign(cardProject5.style, {
//     border: '5px solid',
//     animation: 'animateSpin 4s linear infinite'
// });
// imageBaru2.style.boxShadow = 'none';
// cardBaru2.addEventListener('mouseenter', function () {
//     imageBaru2.style.boxShadow = 'none';
// });
// cardBaru2.addEventListener('mouseleave', function () {
//     imageBaru2.style.boxShadow = 'none';
// });
// const style5 = document.createElement('style');
// style5.innerHTML = `
//     @keyframes animateSpin {
//     0% {
//         border-color: yellow;
//         /* warna border berubah */
//     }
//     30% {
//         border-color: lightblue;
//     }
//     57% {
//         border-color: blue;
//     }
//     77% {
//         border-color: purple;
//     }
//     100% {
//         border-color: yellow;
//     }
// }`;
// document.head.appendChild(style);

// project 6
// const cardProject6 = document.querySelector('#projects .card:nth-child(6)');
// Object.assign(cardProject6.style, {
//     border: '5px solid',
//     animation: 'animateSpin 4s linear infinite'
// })
// imageBaru3.style.boxShadow = 'none';
// cardBaru3.addEventListener('mouseenter', function () {
//     imageBaru3.style.boxShadow = 'none';
// });
// cardBaru3.addEventListener('mouseleave', function () {
//     imageBaru3.style.boxShadow = 'none';
// });
// const style6 = document.createElement('style');
// style6.innerHTML = `
//     @keyframes animateSpin {
//     0% {
//         border-color: yellow;
//         /* warna border berubah */
//     }
//     30% {
//         border-color: lightblue;
//     }
//     57% {
//         border-color: blue;
//     }
//     77% {
//         border-color: purple;
//     }
//     100% {
//         border-color: yellow;
//     }
// }`;
// document.head.appendChild(style);


// Copyright (C) 2024 Setya Budi Pratama

// All rights reserved.

// This software is proprietary and confidential. Unauthorized copying of this file, via any medium, is strictly prohibited.
// You may not decompile, reverse engineer, disassemble, or otherwise attempt to derive the source code of this software.

// This software may not be used, copied, modified, or distributed in any form without the prior written consent of the copyright holder.

// DOM
// rubah cardText projets
const cardTextProjects = document.querySelectorAll('#projects .card-text');
for (let i = 0; i < cardTextProjects.length; i++) {
    cardTextProjects[i].innerHTML = '(double-click to see result)';
};

// const cardTextGithub = document.querySelector('#github .card-text');
// cardTextGithub.innerHTML = 'See More';
