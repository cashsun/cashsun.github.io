			var container;
			var camera, scene, renderer, group, particle;
			var mouseX = 0, mouseY = 0;

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;
			init();
			animate();
                        
			function init() {
				container = $( '#canvaswrapper' );
				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 3000 );
				camera.position.z = 1000;

				scene = new THREE.Scene();

				var PI2 = Math.PI * 2;
				var program = function ( context ) {

					context.beginPath();
					context.arc( 0, 0, 1, 0, PI2, true );
					context.closePath();
					context.fill();
				}

				group = new THREE.Object3D();
				scene.add( group );

				for ( var i = 0; i < 1000; i++ ) {

					particle = new THREE.Particle( new THREE.ParticleCanvasMaterial( { color: 0xff6699, program: program } ) );
					particle.position.x = Math.random() * 2000 - 1000;
					particle.position.y = Math.random() * 2000 - 1000;
					particle.position.z = Math.random() * 2000 - 1000;
					particle.scale.x = particle.scale.y = Math.random() * 10 + 5;
					group.add( particle );
				}

				renderer = new THREE.CanvasRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.html( renderer.domElement );



				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );

				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}


			function onDocumentMouseMove( event ) {

				mouseX = event.clientX - windowHalfX;
				mouseY = event.clientY - windowHalfY;
			}

			function onDocumentTouchStart( event ) {

				if ( event.touches.length === 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}

			function onDocumentTouchMove( event ) {

				if ( event.touches.length === 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}


			function animate() {

				requestAnimationFrame( animate );

				render();

			}

			function render() {

				camera.position.x += ( mouseX - camera.position.x ) * 0.03;
				camera.position.y += ( - mouseY - camera.position.y ) * 0.03;
				camera.lookAt( scene.position );

				group.rotation.x += 0.003;
				group.rotation.y += 0.003;

				renderer.render( scene, camera );

			}