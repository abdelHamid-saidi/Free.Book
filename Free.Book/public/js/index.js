
function generateProjectBlock(index, url) {
    var title = "Titre du livre " + (index + 1);
    var author = "Auteur " + (index + 1);
    var publisher = "Editeur " + (index + 1);
    var proposer = "Utilisateur " + (index + 1);
    var description = "Description livre " + (index + 1);

    var projectBlock = document.createElement('div');
    projectBlock.className = "col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2";

    projectBlock.innerHTML = `
    <div class="project-item mb-5 wow fadeInUp">
        <div class="position-relative">
            <img class="img-fluid" src="${url}" alt="">
            <div class="project-overlay">
                <a class="btn btn-lg-square btn-light rounded-circle m-1" href="${url}" data-lightbox="project"><i class="fa fa-eye"></i></a>
                <a class="btn btn-lg-square btn-light rounded-circle m-1" href="#"><i class="fa fa-link"></i></a>
            </div>
        </div>
        <div class="p-4">
            <a class="d-block h5" href="">${title}</a>
            <span>Auteur : ${author}</span><br>
            <span>Editeur : ${publisher}</span><br>
            <span>Proposé par : ${proposer}</span><br>
            <span>${description}</span>
        </div>
    </div>
    `;

    return projectBlock;
}

let url1 = "img/livre-1.jpg"
let url2 = "img/livre-2.jpg"

var parentElement1 = document.querySelector('#rajoutes');
var parentElement2 = document.querySelector('#echanges');

for (var i = 0; i < 12; i++) {
    var projectBlock1 = generateProjectBlock(i, url1);
    parentElement1.appendChild(projectBlock1);

    var projectBlock2 = generateProjectBlock(i, url2);
    parentElement2.appendChild(projectBlock2);
}
