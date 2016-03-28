/// <reference path="../typings/main.d.ts" />

document.addEventListener('DOMContentLoaded', function() 
{
    console.log("hello DOM");
    
    if (Detector.webgl == false)
    {
        Detector.addGetWebGLMessage();
    }
    
    var SCREEN_WIDTH = window.innerWidth;
    var SCREEN_HEIGHT = window.innerHeight;
    var FLOOR = 0;
    
    var container;
    
    var camera, scene;
    var webglRenderer : THREE.WebGLRenderer;
    
    var zmesh : THREE.Mesh, geometry : THREE.Mesh;
    
    var mouseX = 0, mouseY = 0;
    var mousemoveX = 0, mouseMoveY = 0;
    
    var windowHalfX = SCREEN_WIDTH * 0.5;
    var windowHalfY = SCREEN_HEIGHT * 0.5;
    
    document.addEventListener("mousedown", onDocumentMouseDown, false);
    
    init();
    animate();
    
    function init()
    {
        container = document.createElement('div');
        document.body.appendChild(container);
        
        // camera
        camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 100000);
        camera.position.z = 75;
        
        // scene
        scene = new THREE.Scene();
        
        // lights
        var ambient = new THREE.AmbientLight(0xffffff);
        scene.add(ambient);
        
        // more lights
        var directionalLight = new THREE.DirectionalLight(0xffeedd);
        directionalLight.position.set(0, -70, 100).normalize();
        scene.add(directionalLight);
        
        // renderer
        webglRenderer = new THREE.WebGLRenderer();
        webglRenderer.setSize(SCREEN_WIDTH, SCREEN_WIDTH);
        webglRenderer.domElement.style.position = "relative";
        container.appendChild( webglRenderer.domElement );
        
        // load ascii model
        var jsonLoader = new THREE.JSONLoader();
        jsonLoader.load("obj/html5rocks.js", function (geometry) 
        {
        createScene(geometry);
        });
    }
    
    function onDocumentMouseDown(event : MouseEvent)
    {
        
    }
    
    function createScene(geometry:THREE.Geometry)
    {
        
        var map = new THREE.TextureLoader().load("obj/UV_Grid_Sm.jpg");
        map.wrapS = map.wrapT = THREE.RepeatWrapping;
        map.anisotropy = 16;
        
        var mat = new THREE.MeshLambertMaterial({map: map, side: THREE.DoubleSide});
        
        zmesh = new THREE.Mesh(geometry, mat);
        zmesh.position.set(-10, -10,0);
        zmesh.scale.set(1,1,1);
        scene.add(zmesh);
    }
    
    function animate()
    {
        requestAnimationFrame(animate);
        render();
    }
    
    function render()
    {
        if (zmesh != null)
        {
            zmesh.rotation.set(zmesh.rotation.x, zmesh.rotation.y + 0.1, zmesh.rotation.z);
        }
        webglRenderer.render(scene,camera);
    }
});
