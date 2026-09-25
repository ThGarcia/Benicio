/* =========================================================
   TEMA
========================================================= */
const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');

        themeIcon.textContent = '☀️';
        themeText.textContent = 'Dia do Benício';
    } else {
        document.body.setAttribute(
            'data-theme',
            'dark'
        );

        themeIcon.textContent = '🌙';
        themeText.textContent = 'Noite do Benício';
    }
}
);

/* =========================================================
   ÁLBUNS
   
   É AQUI QUE VOCÊ VAI COLOCAR AS FOTOS.
========================================================= */
const albuns = {
    /* =====================================================
       ÁLBUM DA MAMÃE
    ===================================================== */
    mamae: {
        titulo: '📸 Mamãe',
        subtitulo: 'Evidências de que ela esteve por aqui...',
        fotos: [
            {
                src: 'https://drive.google.com/thumbnail?id=1Rbom07We5S9G7jM9q4I5Dm3NNA5IO9Hd',
                legenda: 'Mamãe'
            },
            {
                src: 'https://drive.google.com/thumbnail?id=1fR4cBaYFCyR0xYpt9ykzau0vAJxYlfQg',
                legenda: 'Arrumando meu quartinho...'
            },
            {
                src: 'https://drive.google.com/thumbnail?id=1adl6N19F330uYL4V_qpx7VhoYQuzgSVA',
                legenda: 'Trabalhando?'
            }
        ]
    },

    /* =====================================================
       ÁLBUM DO PAPAI
    ===================================================== */
    papai: {
        titulo: '📸 Papai',
        subtitulo: 'Mais uma evidência encontrada...',
        fotos: [
            {
                src: 'https://drive.google.com/thumbnail?id=1wyXCr6Wt8R7oOoDkZagofWqRFHe215xa',
                legenda: 'Papai'
            },
            {
                src: 'https://drive.google.com/thumbnail?id=1moAyMjOsQ-uERrryHUdR8tlW0s59hpco',
                legenda: 'Papai toca violão?'
            },
            {
                src: 'https://drive.google.com/thumbnail?id=1EcdfMej-SKHdD1RGELMtIVGJI0p3J1It',
                legenda: 'Fazendo meu quartinho'
            }
        ]
    },

    /* =====================================================
       ÁLBUM DO BENÍCIO
    ===================================================== */
    benicio: {
        titulo: '🔍 Quem é esse pequeno?',
        subtitulo: 'As primeiras pistas sobre o Benício...',
        fotos: [
            {
                src: './b.o.m.png',
                legenda: 'Esse sou eu?'
            },
            {
                src: 'COLOQUE_AQUI_O_LINK_DA_FOTO',
                legenda: 'Mais uma descoberta'
            },
            {
                src: 'COLOQUE_AQUI_O_LINK_DA_FOTO',
                legenda: 'Pequeno explorador'
            }
        ]
    },

    /* =====================================================
       ÁLBUM DOS PRIMEIROS PASSOS
    ===================================================== */
    passos: {
        titulo: '👣 Primeiros Passos',
        subtitulo: 'Uma pequena caminhada que virou uma grande história.',
        fotos: [
            {
                src:
                    'COLOQUE_AQUI_O_LINK_DA_FOTO',
                legenda:
                    'Primeiros passos'
            },
            {
                src:
                    'COLOQUE_AQUI_O_LINK_DA_FOTO',
                legenda:
                    'E lá foi ele...'
            },
            {
                src:
                    'COLOQUE_AQUI_O_LINK_DA_FOTO',
                legenda:
                    'Mais uma aventura'
            }
        ]
    },

    /* =====================================================
       ÁLBUM DE AVENTURAS
    ===================================================== */
    aventuras: {
        titulo: '⭐ Hoje & Aventuras',
        subtitulo: 'Momentos que ainda estão sendo escritos.',
        fotos: [
            {
                src:
                    'COLOQUE_AQUI_O_LINK_DA_FOTO',
                legenda:
                    'Uma nova aventura'
            },
            {
                src:
                    'COLOQUE_AQUI_O_LINK_DA_FOTO',
                legenda:
                    'Um dia especial'
            },
            {
                src:
                    'COLOQUE_AQUI_O_LINK_DA_FOTO',
                legenda:
                    'Memória de 2026'
            }
        ]
    }
};

/* =========================================================
   ELEMENTOS DOS ÁLBUNS
========================================================= */
const albumModal = document.getElementById('albumModal');
const albumTitle = document.getElementById('albumTitle');
const albumSubtitle = document.getElementById('albumSubtitle');
const albumGrid = document.getElementById('albumGrid');
const closeAlbum = document.getElementById('closeAlbum');
const albumBack = document.getElementById('albumBack');

/* =========================================================
   VARIÁVEIS DA GALERIA
========================================================= */
let albumAtual = null;
let fotoAtual = 0;

/* =========================================================
   ABRIR ÁLBUM
========================================================= */
function abrirAlbum(nomeAlbum) {
    const album = albuns[nomeAlbum];

    if (!album) {
        console.error('Álbum não encontrado:', nomeAlbum);
        return;
    }

    albumAtual = nomeAlbum;

    albumTitle.textContent = album.titulo;
    albumSubtitle.textContent = album.subtitulo;
    albumGrid.innerHTML = '';

    album.fotos.forEach(
        (foto, index) => {
            const card = document.createElement('div');

            card.className = 'album-photo-card';

            const rotacoes = [
                '-2deg',
                '1.5deg',
                '-1deg',
                '2deg',
                '-1.5deg'
            ];

            card.style.setProperty(
                '--album-rotation',
                rotacoes[
                index %
                rotacoes.length
                ]
            );

            card.innerHTML = `
                        <img src="${foto.src}" alt="${foto.legenda}">
                        <div class="album-photo-caption">
                            ${foto.legenda}
                        </div>
                    `;

            card.addEventListener(
                'click',
                () => {
                    abrirLightbox(index);
                }
            );
            albumGrid.appendChild(card);
        }
    );

    albumModal.classList.add('active');
    document.body.classList.add('modal-open');
    albumModal.scrollTop = 0;
}

/* =========================================================
   FECHAR ÁLBUM
========================================================= */
function fecharAlbum() {
    albumModal.classList.remove('active');
    document.body.classList.remove('modal-open');
}

closeAlbum.addEventListener('click', fecharAlbum);
albumBack.addEventListener('click', fecharAlbum);

/* =========================================================
   CLIQUES NOS POLAROIDS
========================================================= */
document
    .querySelectorAll('.album-trigger')

    .forEach(
        elemento => {
            elemento.addEventListener('click', () => {
                const nomeAlbum = elemento.dataset.album;
                abrirAlbum(nomeAlbum);
            }
            );
        }
    );

/* =========================================================
   CLIQUES NOS BOTÕES
========================================================= */
document
    .querySelectorAll('.album-button')

    .forEach(
        botao => {
            botao.addEventListener('click', () => {
                const nomeAlbum = botao.dataset.album;
                abrirAlbum(nomeAlbum);
            }
            );
        }
    );

/* =========================================================
   LIGHTBOX
========================================================= */
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

/* =========================================================
   ABRIR FOTO GRANDE
========================================================= */
function abrirLightbox(index) {
    const album = albuns[albumAtual];

    if (!album) {
        return;
    }

    fotoAtual = index;
    atualizarLightbox();
    lightbox.classList.add('active');
}

/* =========================================================
   ATUALIZAR FOTO
========================================================= */
function atualizarLightbox() {
    const album = albuns[albumAtual];

    const foto = album.fotos[fotoAtual];

    lightboxImage.src = foto.src;
    lightboxImage.alt = foto.legenda;
    lightboxCaption.textContent = foto.legenda;
}

/* =========================================================
   PRÓXIMA FOTO
========================================================= */
function proximaFoto() {
    const album = albuns[albumAtual];

    fotoAtual++;
    if (fotoAtual >= album.fotos.length) {
        fotoAtual = 0;
    }
    atualizarLightbox();
}

/* =========================================================
   FOTO ANTERIOR
========================================================= */
function fotoAnterior() {
    const album = albuns[albumAtual];

    fotoAtual--;
    if (fotoAtual < 0) {
        fotoAtual = album.fotos.length - 1;
    }
    atualizarLightbox();
}

/* =========================================================
   FECHAR LIGHTBOX
========================================================= */
function fecharLightbox() {
    lightbox.classList.remove('active');
}

lightboxClose.addEventListener('click', fecharLightbox);
lightboxPrev.addEventListener('click', fotoAnterior);
lightboxNext.addEventListener('click', proximaFoto);
/* =========================================================
   CLIQUE FORA DA FOTO
========================================================= */
lightbox.addEventListener('click', evento => {
    if (evento.target === lightbox) {
        fecharLightbox();
    }
}
);

/* =========================================================
   TECLADO
========================================================= */
document.addEventListener('keydown', evento => {
    if (!lightbox.classList.contains('active')) {
        if (evento.key === 'Escape') {
            fecharAlbum();
        }
        return;
    }

    if (evento.key === 'Escape') {
        fecharLightbox();
    }

    if (evento.key === 'ArrowRight') {
        proximaFoto();
    }

    if (evento.key === 'ArrowLeft') {
        fotoAnterior();
    }
}
);
