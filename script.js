function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
}

function loadContent(sectionId) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                displayContent(xhr.responseText);
            } else {
                console.error('Failed to load content for section: ' + sectionId);
            }
        }
    };

    xhr.open('GET', sectionId + '.md', true);
    xhr.send();
}

function displayContent(content) {
    if (typeof marked === 'function') {
        var contentContainer = document.getElementById('content-container');
        contentContainer.innerHTML = marked(content);
        console.log(content);
    } else {
        console.error('marked is not defined. Make sure the marked library is included.');
    }
}

function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
}

document.addEventListener('click', function (event) {
    var sidebar = document.getElementById('sidebar');
    var toggleBtn = document.getElementById('toggleBtn');

    if (!sidebar.contains(event.target) && event.target !== toggleBtn) {
        sidebar.classList.remove('show');
    }
});

document.getElementById('toggleBtn').addEventListener('click', function (event) {
    event.stopPropagation();
});
