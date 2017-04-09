//! AWS Cognito Identity
//!
//! If you're using the service, you're probably looking for [CognitoIdentityClient](struct.CognitoIdentityClient.html).

use region;

include!(concat!(env!("OUT_DIR"), "/cognito-identity.rs"));
