import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { InputData } from '../InputData';
import { OutputData } from '../OutputData';

@Component({
  selector: 'app-invoke-user-exit',
  templateUrl: './invoke-user-exit.component.html',
  styleUrls: ['./invoke-user-exit.component.css']
})



export class InvokeUserExitComponent implements OnInit {

  UEInputData: String = "";
  UEOutputData: String = "";
  _inputData: InputData = new InputData;
  _outputData: OutputData = new OutputData;
  _activerequests: Array<String>=[];
  ueURL: string = 'http://localhost:8080';
 

  constructor(private http: HttpClient) { }

  ngOnInit(): void 
  {
  
  }

  public findInputPayLoadbyRequestId(_requestId: any)
  {
    
    this.httpRequestoRemoteServer('100');
  }

  public httpRequestoRemoteServer(_httpInputData: any)
  {

    
    this.http.post<InputData>(this.ueURL+'/FindInputPayLoadbyRequestId', _httpInputData).subscribe((data)=> {this._inputData = data; this.UEInputData=data.inputPayload});
  }
  
  public Post_StoreOutputPayload()
  {
   this._outputData.requestId= this._inputData.requestId;
   this._outputData.outputPayload= this.UEOutputData;
  this.http.post<boolean>(this.ueURL+'/StoreOutputPayload', this._outputData).subscribe((data)=> 
  {
    if(data == true)
    {
  
    alert(data);

    }
  });
  }
  public ActiveRequests()
  {
    this._activerequests=[];
    this.http.get<Array<String>>(this.ueURL+'/GetActiveRequests').subscribe((data)=> 
    {
      this._activerequests= data;
    
    
    });
   
   
    
  }


}