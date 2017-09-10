package test.ws;

import org.apache.cxf.jaxws.JaxWsProxyFactoryBean;
import org.junit.Test;

import base.SpringTestBaseCase;

import com.team.cd.ws.IHelloWorld;



public class HelloWorldWebServiceClientTest extends SpringTestBaseCase {
	  
	@Test public  void helloWorldWebServiceTest(){
	      String ADDRESS = "http://localhost/spring.framework/cxf/helloWorld";
		  JaxWsProxyFactoryBean jwpFactory = new JaxWsProxyFactoryBean();  
	      jwpFactory.setAddress(ADDRESS);  
	      jwpFactory.setServiceClass(IHelloWorld.class);  
	      IHelloWorld hw = (IHelloWorld)jwpFactory.create(); 
	      String response = hw.sayHi("world");  
	      System.out.println(response); 
	     
	   }  
}
