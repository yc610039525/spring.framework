package com.team.cd.ws;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

@WebService
public interface IHelloWorld {  
	 @WebMethod
	 String sayHi(@WebParam(name="text")String text);     
}  