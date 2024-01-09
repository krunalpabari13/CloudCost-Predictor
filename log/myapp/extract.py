# import json
# from django.http import JsonResponse
# def extract(jsondata):
#     azureans=azure(jsondata)
#     awsans=aws(jsondata)

#     ans={
#         "azure":azureans,
#         "aws":awsans
#     }
#     print(ans)
#     return ans
# def azure(jsondata):
#     with open('./pricing/azure.json','r') as jsonread:
#         filedata=json.load(jsonread)
#         ans=0;
#         for input in jsondata:
#             for data in filedata:
#                 if input['source'] in data:
#                     for items in data[input['source']]:
#                         if input['source']=='VirtualMachine' or input['source']=='AzureKubernetesService':
#                             if input['cpu']==items['numberOfCPUs'] and input['ram']==items['ramSize']:
#                                 ans+=input['hours']*items['hourlyPrice'];
                                
#                                 break;
#                         elif input['source']=='database':
#                             if items['databaseEngine']==input['engine'] and items['region']=='East US':
#                                 ans+=input['hours']*items['hourlyPrice']
#                                 break;
#                         elif input['source']=='LoadBalancer':
#                             if items['region']=='East US':
#                              ans+=input['hours']*items['hourlyPrice'];
#                              break;
#                         elif input['source']=='AzureBackup':
#                             if items['backupType']==input['backupType'] and items['storageSize']==input['storageSize']:
#                                 ans+=input['hours']*items['hourlyPrice'];
#                                 break;
#         return ans
    
# def aws(jsondata):
#     with open('./pricing/aws.json','r') as fileread:
        
#         fetchdata=json.load(fileread)
#         ans=0
#         for input in jsondata:
#             if input['source'] in fetchdata:
#                 for items in fetchdata[input['source']]:                
#                     if input['source']=='VirtualMachine':
#                          if input['cpu']==items['vCPUs'] and input['ram']==items['memory'] and input['os']==items['operatingSystem']:
#                             ans+=input['hours']*items['hourlyPrice'];
#                             break;
#                     elif input['source']=='database':
                       
#                         if input['engine']=='MongoDB':
                                
#                                 ans+=input['hours']*items['hourlyPrice']
                                
#                         else:
#                             for other in fetchdata['AWSRDS']:
#                                 ans+=input['hours']*other['hourlyPrice']
#                                 break;
#                     elif input['source']=='LoadBalancer':
#                          if items['region']=='East US':
#                              ans+=input['hours']*items['hourlyPrice'];
#                              break;
                 
#     return ans;

import json
from django.http import JsonResponse

def extract(jsondata):
    azureans = azure(jsondata)
    awsans = aws(jsondata)
    total=max(azureans,awsans)
    m=min(azureans,awsans)

    percent=(m*100)/total
    ans = {
        "azure": azureans,
        "aws": awsans,
        "percent":100-percent
    }

    return ans # Use JsonResponse to send data to the frontend

def azure(jsondata):
    with open('./pricing/azure.json', 'r') as jsonread:
        filedata = json.load(jsonread)
        ans = 0
        for input in jsondata:
            for data in filedata:
                if input['source'] in data:
                    for items in data[input['source']]:
                        if input['source'] in ['VirtualMachine', 'AzureKubernetesService']:
                            if input['cpu'] == items['numberOfCPUs'] and input['ram'] == items['ramSize']:
                                ans += input['hours'] * items['hourlyPrice']
                                break
                        elif input['source'] == 'database':
                            if items['databaseEngine'] == input['engine'] and items['region'] == 'East US':
                                ans += input['hours'] * items['hourlyPrice']
                                break
                        elif input['source'] == 'LoadBalancer':
                            if items['region'] == 'East US':
                                ans += input['hours'] * items['hourlyPrice']
                                break
                        elif input['source'] == 'AzureBackup':
                            if items['backupType'] == input['backupType'] and items['storageSize'] == input['storageSize']:
                                ans += input['hours'] * items['hourlyPrice']
                                break
        return ans

def aws(jsondata):
    with open('./pricing/aws.json', 'r') as fileread:
        fetchdata = json.load(fileread)
        ans = 0
        for input in jsondata:
            if input['source'] in fetchdata:
                for items in fetchdata[input['source']]:
                    if input['source'] == 'VirtualMachine':
                        if input['cpu'] == items['vCPUs'] and input['ram'] == items['memory'] and input['os'] == items['operatingSystem']:
                            ans += input['hours'] * items['hourlyPrice']
                            break
                    elif input['source'] == 'database':
                        if input['engine'] == 'MongoDB':
                            ans += input['hours'] * items['hourlyPrice']
                        else:
                            for other in fetchdata['AWSRDS']:
                                ans += input['hours'] * other['hourlyPrice']
                                break
                    elif input['source'] == 'LoadBalancer':
                        if items['region'] == 'East US':
                            ans += input['hours'] * items['hourlyPrice']
                            break
                    elif input['source']=='AWSLambda':
                        if items['region']=='East US':
                            ans+=items['pricePerInvocation']*input['hours']
                            break
        return ans
