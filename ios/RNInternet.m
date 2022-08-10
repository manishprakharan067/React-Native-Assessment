//
//  RNInternet.m
//  AwesomeProject
//
//  Created by Manish Prakharan on 10/08/22.
//

#import "RNInternet.h"
#import <React/RCTLog.h>

@implementation RNInternet

RCT_EXPORT_MODULE();

- (BOOL)currentNetworkStatus
{
    Reachability *reachability = [Reachability reachabilityForInternetConnection];
    NetworkStatus networkStatus = [reachability currentReachabilityStatus];
    return networkStatus != NotReachable;
}

RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)
{
  if ([self currentNetworkStatus]) {
      //connected
    callback(@[@"YES"]);
  } else {
      //not connected
    callback(@[@"NO"]);
  }
}

@end
