
    function InitWebGLContext() {
        var glCanvas = document.getElementById("glCanvas");
        // first, try standard WebGL context
        var gl = glCanvas.getContext("webgl");
        if (!gl) {
            // if failed, try experimental one
            gl = glCanvas.getContext("experimental-webgl");
        }
 
        if (!gl) {
            alert("Your browser does not support WebGL");
            return;
        }
 
        // here we get WebGL context - 
        // for demonstation let's show some info
        alert(
            "WebGL version=" + gl.getParameter(gl.VERSION) + "\n" +
            "WebGL vendor=" + gl.getParameter(gl.VENDOR) + "\n" +
            "WebGL renderer=" + gl.getParameter(gl.RENDERER) + "\n"
        );
    }

