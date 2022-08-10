//
//  RNInternet.h
//  AwesomeProject
//
//  Created by Manish Prakharan on 10/08/22.
//

#import <React/RCTBridgeModule.h>
#import "Reachability.h"
@interface RNInternet : NSObject <RCTBridgeModule>
- (BOOL)currentNetworkStatus;
@end
