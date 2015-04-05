package com.webcat;
import static spark.Spark.*;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;
import com.webcatlib.DBConnector;

import spark.*;

public class AppStart {

	public static void main(String[] args) throws Exception {		
		
		String IP_ADDRESS = System.getenv("OPENSHIFT_DIY_IP");		
		int PORT;
		String REPO_DIR;
		String DATA_DIR;
		
		DBConnector dbconn=new DBConnector();
		final DB db=dbconn.getDB();
		
		if (IP_ADDRESS==null)
		{
			IP_ADDRESS = "localhost";		
			PORT = 8080;
			REPO_DIR=System.getProperty("user.dir") + "/resources/public/";	
			DATA_DIR="E:/CatalogApp_Data_dir/";
		}
		else
		{	
			PORT = Integer.parseInt(System.getenv("OPENSHIFT_DIY_PORT"));	
			REPO_DIR=System.getenv("OPENSHIFT_REPO_DIR") + "resources/public/";	
			DATA_DIR=System.getenv("OPENSHIFT_DATA_DIR");
		}
		externalStaticFileLocation(DATA_DIR + "public/");
		setIpAddress(IP_ADDRESS);
		setPort(PORT);		
		
		
		get("/",new Route(){
			public Object handle(Request request, Response response) 
			{					 
				response.redirect("home");			 
				return "";	             
			}
		});
		
		get("/home",new Route(){
			public Object handle(Request request, Response response) 
			{		
				String html = "";
				try 
				{
					html=getStringFromFile(REPO_DIR + "home.html");
				} 
				catch (Exception e) 
				{					
					e.printStackTrace();
				}
				return html;	             
			}
		});
		
		get("/json",new Route(){
			public Object handle(Request request, Response response) 
			{						 
				DBCollection coll = db.getCollection("testcoll");
				DBObject myDoc = coll.findOne();				 
				String dbstr=myDoc.toString();					 		 
				return dbstr;	             
			}
		});

	}
	
	
	public static String getStringFromFile(String file_path) throws Exception
	{
		File fl=new File(file_path);
		FileInputStream is=new FileInputStream(fl);
		byte[] container_data=null;	
		ByteArrayOutputStream container = new ByteArrayOutputStream();
        byte[] buf = new byte[8*1024];
        int read;
        while ((read = is.read(buf, 0, 8*1024)) > 0) 
        {
            container.write(buf, 0, read);            
        }			
        container_data=container.toByteArray();   
        is.close();
        return new String(container_data);
	}

}
