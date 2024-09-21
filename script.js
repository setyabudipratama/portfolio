// Copyright (C) 2024 Setya Budi Pratama

// All rights reserved.

// This software is proprietary and confidential. Unauthorized copying of this file, via any medium, is strictly prohibited.
// You may not decompile, reverse engineer, disassemble, or otherwise attempt to derive the source code of this software.

// This software may not be used, copied, modified, or distributed in any form without the prior written consent of the copyright holder.

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

// mengambil selector i dari semua elemen
const icons = document.querySelectorAll('section#skills i');
// merubah warna semua icon halaman skills
icons.forEach(icon => {
    icon.style.color = 'yellow';
});

//ambil element yang dibutuhkan pada waktu mode siang dan malam
const h2 = document.querySelectorAll('section.py-5 h2');
const label = document.querySelectorAll('section.py-5 label');
const skillsh5 = document.querySelectorAll('#skills h5');
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
});

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
const teksSpanBaru = document.createTextNode('sy.setyabudi');
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
aBaru.href = 'https://www.instagram.com/sy.setyabudi/';

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
