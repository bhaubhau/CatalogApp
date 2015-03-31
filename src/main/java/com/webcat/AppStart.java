package com.webcat;
import static spark.Spark.*;


import spark.*;

public class AppStart {

	public static void main(String[] args) throws Exception {
		
		String IP_ADDRESS = System.getenv("OPENSHIFT_DIY_IP");		
		int PORT;
		String REPO_DIR;
		
		if (IP_ADDRESS==null)
		{
			IP_ADDRESS = "localhost";		
			PORT = 8080;
			REPO_DIR=System.getProperty("user.dir");			
		}
		else
		{	
			PORT = Integer.parseInt(System.getenv("OPENSHIFT_DIY_PORT"));	
			REPO_DIR=System.getenv("OPENSHIFT_REPO_DIR");			
		}
		externalStaticFileLocation(REPO_DIR + "/resources/public/");
		setIpAddress(IP_ADDRESS);
		setPort(PORT);
		
		
		
		get("/",new Route(){
			 public Object handle(Request request, Response response) {			 
				 
				 response.redirect("index.html");
				 return "";
	             
	            }
		});

	}

}
