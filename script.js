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
const iconVue = document.querySelector('#skills .icon:nth-child(4) i');
// merubah warna icon di halaman skills
iconHtml.style.color = 'red';
iconCss.style.color = 'blue';
iconJavascript.style.color = 'yellow';
iconVue.style.color = '#42B883';


// DOM
// document.querySelector('.background').remove();
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
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.dots.min.js", 'sha512-fq89yHimK/w687Yjr89Vml8ax1HBNfN1k9IRi/nu91AmCrIWc/yQz5jkJKHoUWxGnuMcMwm7vRY50S7rZsXoDA==');

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
        VANTA.DOTS({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: "yellow",
            backgroundColor: "darkblue"
        })
    } catch (error) {
        console.error('Failed to load script:', error);
    }
})();


//ambil element yang dibutuhkan pada waktu mode siang dan malam
const h2 = document.querySelectorAll('section.py-5 h2');
h2.forEach(h => h.style.color = '#CCD0FF');
const label = document.querySelectorAll('section.py-5 label');
label.forEach(l => l.style.color = '#CCD0FF');
const skillsh5 = document.querySelectorAll('#skills h5');
skillsh5.forEach(sh5 => sh5.style.color = '#CCD0FF');
const iconGithub = document.querySelector('#projects #github .image i');
iconGithub.style.color = '#CCD0FF';
const textCipta = document.querySelectorAll('footer .left p');
textCipta.forEach(tc => tc.style.color = '#CCD0FF');
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
            text: '#FFFFFF'
        },
        night: {
            background: '#D0B1FF',
            text: '#CCD0FF'
        }
    };

    lamp.classList.toggle('fa-toggle-on', !isNightMode);
    lamp.classList.toggle('fa-toggle-off', isNightMode);

    // body.style.backgroundColor = colors[isNightMode ? 'night' : 'day'].background;
    btnGithub.style.backgroundColor = colors[isNightMode ? 'night' : 'day'].text;
    // btnGithub.style.color = colors[isNightMode ? 'night' : 'day'].background;
    skillsh5.forEach(h => h.style.color = colors[isNightMode ? 'night' : 'day'].text);
    label.forEach(l => l.style.color = colors[isNightMode ? 'night' : 'day'].text);
    h2.forEach(h => h.style.color = colors[isNightMode ? 'night' : 'day'].text);
    iconGithub.style.color = colors[isNightMode ? 'night' : 'day'].text;
    // textGithub.style.color = colors[isNightMode ? 'night' : 'day'].text;
    textCipta.forEach(t => t.style.color = colors[isNightMode ? 'night' : 'day'].text);
});


// DOM
// menambahkan icon baru 'instagram' diawal child
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


// mangganti icon lokasi dengan icon github
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
aGit.href = 'https://github.com/setyabudipratama/';

// ambil parent
const Git = document.querySelector('footer li:last-child i');
// hapus kelas
Git.removeAttribute('class');
// tambah kelas baru
Git.setAttribute('class', 'fa-brands fa-github');
// ubah warna
Git.style.color = 'white';


// mengganti icon telepon dengan icon linkedin
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


// DOM
const cardTextGithub = document.querySelector('#github .card-text');
cardTextGithub.remove();

// github
const iconGithubCursor = document.querySelector('#projects #github .fa-square-github');
iconGithubCursor.style.cursor = 'default';
// tag button
const btnGithub = document.createElement('button');
btnGithub.style.backgroundColor = '#CCD0FF';
const cardBodyGithub = document.querySelector('#projects #github .card-body');
cardBodyGithub.appendChild(btnGithub);
const textBtnGithub = document.createTextNode('see more');
btnGithub.appendChild(textBtnGithub);
Object.assign(btnGithub.style, { 
    width: '100px',
    height: '40px',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#CCD0FF',
    color: '#000000',
    textTransform: 'capitalize',
    position: 'relative',
    overflow: 'hidden',
    top: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.5s ease 0.2s',
});

// tag span
const spanGithub = document.createElement('span');
btnGithub.appendChild(spanGithub);
Object.assign(spanGithub.style, {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '0',
    height: '0',
    backgroundColor: 'yellow',
    color: '#00098D',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    transition: 'all 0.5s ease',
});

// tag i
const iGithub2 = document.createElement('i');
spanGithub.appendChild(iGithub2);
iGithub2.setAttribute('class', 'fa-brands fa-github');
Object.assign(iGithub2.style, {
    position: 'relative',
    fontSize: '1.5rem',
    color: 'black',
    opacity: '0',
    transition: 'opacity 0.5s ease',
});

btnGithub.addEventListener('mouseenter', function () {
    spanGithub.style.width = '100%';
    spanGithub.style.height = '100%';
    iGithub2.style.opacity = '1';
    btnGithub.style.boxShadow = '0 0 20px yellow';
});
btnGithub.addEventListener('mouseleave', function () {
    spanGithub.style.width = '0';
    spanGithub.style.height = '0';
    iGithub2.style.opacity = '0';
    btnGithub.style.boxShadow = 'none';
});

const btnComponent = document.querySelector('#projects #github .card-body button');
btnComponent.addEventListener('click', function () {
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
Object.assign(h2Header.style, {
    width: '0',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    animation: 'typing 2.5s steps(25, end) forwards',
})
Object.assign(pHeader.style, {
    width: '0',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    animation: 'typing2 2s steps(23, end) 2.5s forwards',
})
const header = document.createElement('style')
header.innerHTML = `
    @keyframes typing {
    form {
    width: 0
    }
    to {
    width: 25ch
    }
}`
document.head.appendChild(header)
const header2 = document.createElement('style')
header2.innerHTML = `
    @keyframes typing2 {
    form {
    width: 0
    }
    to {
    width: 23ch
    }
}`
document.head.appendChild(header2)

document.querySelector('header').style.background = 'transparent'


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

// DOM
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

document.querySelector('#about .container .profil img').setAttribute('src', 'gambar/IMG_20240610_232649.webp');
document.querySelector('footer .left img').setAttribute('src', 'gambar/IMG_20240610_232649.webp');
document.querySelector('footer li:nth-child(4) span').innerHTML = 'setyabudipratam@gmail.com'


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

document.querySelector('#projects .card .image img').setAttribute('src', 'gambar/website ejen.webp');

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

document.querySelector('#projects .card:nth-child(2) .image img').setAttribute('src', 'gambar/website furniture.webp');

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

document.querySelector('#projects .card:nth-child(3) .image img').setAttribute('src', 'gambar/website property.webp');

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
        // Object.assign(h2Header.style, {
        //     fontSize: '1rem'
        // });
        // Object.assign(pHeader.style, {
        //     fontSize: '0.8rem'
        // });
        pAboutUs.style.width = '210px';
        Object.assign(slideProject.style, {
            height: '40vh',
        });
        Object.assign(iGithub.style, {
            fontSize: '7rem',
            position: 'relative',
            top: '55%'
        });
        Object.assign(github.style, {
            width: '200px',
            height: '240px'
        });
    }
}

// panggil fungsi
window.onload = applyResponsiveStyles;


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
imgBaru.setAttribute('src', 'gambar/website company.webp');
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
imgBaru2.setAttribute('src', 'gambar/website wisata.webp');
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
imgBaru3.setAttribute('src', 'gambar/website mobil.webp');
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


// card baru 4
const cardBaru4 = document.createElement('div');
cardBaru4.setAttribute('class', 'card');
// masukkan card baru
projectSlide.insertBefore(cardBaru4, githubIcon);
Object.assign(cardBaru4.style, {
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
const imageBaru4 = document.createElement('div');
imageBaru4.setAttribute('class', 'image');
// masukkan image
cardBaru4.appendChild(imageBaru4);
Object.assign(imageBaru4.style, {
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
const imgBaru4 = document.createElement('img');
imgBaru4.setAttribute('src', 'gambar/RME.webp');
imgBaru4.setAttribute('alt', 'image');
// masukkan img
imageBaru4.appendChild(imgBaru4);
Object.assign(imgBaru4.style, {
    width: '100%',
    height: '100%',
    margin: '0',
    objectFit: 'cover',
    borderRadius: '5px',
});

// element class card-body
const cardBodyBaru4 = document.createElement('div');
cardBodyBaru4.setAttribute('class', 'card-body');
// masukkan card-body
cardBaru4.appendChild(cardBodyBaru4);
Object.assign(cardBodyBaru4.style, {
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
const h5Baru4 = document.createElement('h5');
h5Baru4.setAttribute('class', 'card-title');
h5Baru4.innerHTML = 'RME (frontend)';
// masukkan h5
cardBodyBaru4.appendChild(h5Baru4);
Object.assign(h5Baru4.style, {
    position: 'relative',
    top: '27%',
    color: '#ffffff'
});

// tag button
const buttonBaru4 = document.createElement('button');
buttonBaru4.appendChild(document.createTextNode('See Result'));
h5Baru4.after(buttonBaru4);
Object.assign(buttonBaru4.style, {
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
buttonBaru4.addEventListener('click', function () {
    window.location.href = 'https://setyabudipratama.github.io/RME/';
});
buttonBaru4.addEventListener('mouseenter', function () {
    Object.assign(imgBaru4.style, {
        transform: 'scale(1)',
    });
    Object.assign(buttonBaru4.style, {
        backgroundColor: 'transparent',
        color: '#ffffff'
    });
});
buttonBaru4.addEventListener('mouseleave', function () {
    Object.assign(buttonBaru4.style, {
        backgroundColor: '#ffffff',
        color: '#696ca7'
    });
});

cardBaru4.addEventListener('mouseenter', function () {
    Object.assign(cardBaru4.style, {
        transform: 'translateY(-1.5rem)'
    });
    Object.assign(cardBodyBaru4.style, {
        transform: 'translateY(70px)',
    });
    Object.assign(imageBaru4.style, {
        borderRadius: '5px 5px 0 0',
        boxShadow: 'none'
    });
    Object.assign(imgBaru4.style, {
        borderRadius: '5px 5px 0 0',
        scale: '1'
    });
});
cardBaru4.addEventListener('mouseleave', function () {
    Object.assign(cardBaru4.style, {
        transform: 'translateY(0)'
    });
    Object.assign(cardBodyBaru4.style, {
        borderRadius: '5px',
        transform: 'translate(0)',
    });
    Object.assign(imageBaru4.style, {
        borderRadius: '5px',
        boxShadow: '5px 5px 10px black'
    });
    Object.assign(imgBaru4.style, {
        borderRadius: '5px',
    });
});


// document.querySelector('#sertifikat').remove()
// document.querySelector('nav li:nth-child(4').remove()


// card baru 5
const cardBaru5 = document.createElement('div');
cardBaru5.setAttribute('class', 'card');
// masukkan card baru
projectSlide.insertBefore(cardBaru5, githubIcon);
Object.assign(cardBaru5.style, {
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
const imageBaru5 = document.createElement('div');
imageBaru5.setAttribute('class', 'image');
// masukkan image
cardBaru5.appendChild(imageBaru5);
Object.assign(imageBaru5.style, {
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
const imgBaru5 = document.createElement('img');
imgBaru5.setAttribute('src', 'gambar/website limbah medis.webp');
imgBaru5.setAttribute('alt', 'image');
// masukkan img
imageBaru5.appendChild(imgBaru5);
Object.assign(imgBaru5.style, {
    width: '100%',
    height: '100%',
    margin: '0',
    objectFit: 'cover',
    borderRadius: '5px',
});

// element class card-body
const cardBodyBaru5 = document.createElement('div');
cardBodyBaru5.setAttribute('class', 'card-body');
// masukkan card-body
cardBaru5.appendChild(cardBodyBaru5);
Object.assign(cardBodyBaru5.style, {
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
const h5Baru5 = document.createElement('h5');
h5Baru5.setAttribute('class', 'card-title');
h5Baru5.innerHTML = 'Limbah Medis (frontend)';
// masukkan h5
cardBodyBaru5.appendChild(h5Baru5);
Object.assign(h5Baru5.style, {
    position: 'relative',
    top: '27%',
    color: '#ffffff'
});

// tag button
const buttonBaru5 = document.createElement('button');
buttonBaru5.appendChild(document.createTextNode('See Result'));
h5Baru5.after(buttonBaru5);
Object.assign(buttonBaru5.style, {
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
buttonBaru5.addEventListener('click', function () {
    window.location.href = 'https://setyabudipratama.github.io/limbahMedis';
});
buttonBaru5.addEventListener('mouseenter', function () {
    Object.assign(imgBaru5.style, {
        transform: 'scale(1)',
    });
    Object.assign(buttonBaru5.style, {
        backgroundColor: 'transparent',
        color: '#ffffff'
    });
});
buttonBaru5.addEventListener('mouseleave', function () {
    Object.assign(buttonBaru5.style, {
        backgroundColor: '#ffffff',
        color: '#696ca7'
    });
});

cardBaru5.addEventListener('mouseenter', function () {
    Object.assign(cardBaru5.style, {
        transform: 'translateY(-1.5rem)'
    });
    Object.assign(cardBodyBaru5.style, {
        transform: 'translateY(70px)',
    });
    Object.assign(imageBaru5.style, {
        borderRadius: '5px 5px 0 0',
        boxShadow: 'none'
    });
    Object.assign(imgBaru5.style, {
        borderRadius: '5px 5px 0 0',
        scale: '1'
    });
});
cardBaru5.addEventListener('mouseleave', function () {
    Object.assign(cardBaru5.style, {
        transform: 'translateY(0)'
    });
    Object.assign(cardBodyBaru5.style, {
        borderRadius: '5px',
        transform: 'translate(0)',
    });
    Object.assign(imageBaru5.style, {
        borderRadius: '5px',
        boxShadow: '5px 5px 10px black'
    });
    Object.assign(imgBaru5.style, {
        borderRadius: '5px',
    });
});


// card baru 6
const cardBaru6 = document.createElement('div');
cardBaru6.setAttribute('class', 'card');
// masukkan card baru
projectSlide.insertBefore(cardBaru6, githubIcon);
Object.assign(cardBaru6.style, {
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
const imageBaru6 = document.createElement('div');
imageBaru6.setAttribute('class', 'image');
// masukkan image
cardBaru6.appendChild(imageBaru6);
Object.assign(imageBaru6.style, {
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
const imgBaru6 = document.createElement('img');
imgBaru6.setAttribute('src', 'gambar/fisioApp.webp');
imgBaru6.setAttribute('alt', 'image');
// masukkan img
imageBaru6.appendChild(imgBaru6);
Object.assign(imgBaru6.style, {
    width: '100%',
    height: '100%',
    margin: '0',
    objectFit: 'cover',
    borderRadius: '5px',
});

// element class card-body
const cardBodyBaru6 = document.createElement('div');
cardBodyBaru6.setAttribute('class', 'card-body');
// masukkan card-body
cardBaru6.appendChild(cardBodyBaru6);
Object.assign(cardBodyBaru6.style, {
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
const h5Baru6 = document.createElement('h5');
h5Baru6.setAttribute('class', 'card-title');
h5Baru6.innerHTML = 'Limbah Medis (frontend)';
// masukkan h5
cardBodyBaru6.appendChild(h5Baru6);
Object.assign(h5Baru6.style, {
    position: 'relative',
    top: '27%',
    color: '#ffffff'
});

// tag button
const buttonBaru6 = document.createElement('button');
buttonBaru6.appendChild(document.createTextNode('See Result'));
h5Baru6.after(buttonBaru6);
Object.assign(buttonBaru6.style, {
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
buttonBaru6.addEventListener('click', function () {
    window.location.href = 'https://setyabudipratama.github.io/fisioApp';
});
buttonBaru6.addEventListener('mouseenter', function () {
    Object.assign(imgBaru6.style, {
        transform: 'scale(1)',
    });
    Object.assign(buttonBaru6.style, {
        backgroundColor: 'transparent',
        color: '#ffffff'
    });
});
buttonBaru6.addEventListener('mouseleave', function () {
    Object.assign(buttonBaru6.style, {
        backgroundColor: '#ffffff',
        color: '#696ca7'
    });
});

cardBaru6.addEventListener('mouseenter', function () {
    Object.assign(cardBaru6.style, {
        transform: 'translateY(-1.5rem)'
    });
    Object.assign(cardBodyBaru6.style, {
        transform: 'translateY(70px)',
    });
    Object.assign(imageBaru6.style, {
        borderRadius: '5px 5px 0 0',
        boxShadow: 'none'
    });
    Object.assign(imgBaru6.style, {
        borderRadius: '5px 5px 0 0',
        scale: '1'
    });
});
cardBaru6.addEventListener('mouseleave', function () {
    Object.assign(cardBaru6.style, {
        transform: 'translateY(0)'
    });
    Object.assign(cardBodyBaru6.style, {
        borderRadius: '5px',
        transform: 'translate(0)',
    });
    Object.assign(imageBaru6.style, {
        borderRadius: '5px',
        boxShadow: '5px 5px 10px black'
    });
    Object.assign(imgBaru6.style, {
        borderRadius: '5px',
    });
});
