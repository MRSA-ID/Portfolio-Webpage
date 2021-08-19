// ketika navbar melebihi 600 dari window akan menambahkan class sticky
window.addEventListener('scroll', function(){
	let header = document.querySelector('#navbar');
	header.classList.toggle("sticky", window.scrollY > 600);
});

// animation projects ketika di element a di hover img akan bergerak ke atas sebanyak style class
const Projects = document.querySelectorAll('.Projects .container .project-tile');
Projects.forEach(function(project){
	project.getElementsByTagName('a')[0].addEventListener('mouseover', function(){
		project.getElementsByTagName('img')[0].classList.add('active')
	})
	project.getElementsByTagName('a')[0].addEventListener('mouseleave', function(){
		project.getElementsByTagName('img')[0].classList.remove('active')
	})
})


