#version 120

//void main(){
//	//this is the fragment shader
//	//this is where the pixel level drawing happens
//	//gl_FragCoord gives us the x and y of the current pixel its drawing
	
//	//we grab the x and y and store them in an int
//	float xVal = gl_FragCoord.x;
//	float yVal = gl_FragCoord.y;
	
//	//we use the mod function to only draw pixels if they are every 2 in x or every 4 in y
//	if( mod(xVal, 2.0) == 0.5 && mod(yVal, 2.0) == 0.5 ){
//		gl_FragColor = gl_Color;    
//    }else{
//		gl_FragColor.a = 0.5;
//	}
	
//}

//uniform float border; // 0.01
//uniform float circle_radius; // 0.5
//uniform vec4 circle_color; // vec4(1.0, 1.0, 1.0, 1.0)
//uniform vec2 circle_center; // vec2(0.5, 0.5)    
void main (void)
{
	float border = 0.01;
	float circle_radius = 50.0;
	vec4 circle_color = vec4(1.0, 0.0, 1.0, 1.0);
	vec2 circle_center = vec2(100.0,100.0);
	float xVal = gl_FragCoord.x;
	float yVal = gl_FragCoord.y;
  
  
  // Offset uv with the center of the circle.
  float dist =  sqrt((circle_center.x - xVal)*(circle_center.x - xVal) + (circle_center.y - yVal)*(circle_center.y - yVal));
  if ( dist < circle_radius )
  //if( mod(xVal, 2.0) == 0.5 && mod(yVal, 2.0) == 0.5 )
  {
    gl_FragColor.a = 0.0;
  }
  else
  { 
    gl_FragColor = circle_color;
  }
}