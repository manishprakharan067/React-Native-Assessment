package com.awesomeproject;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import androidx.annotation.NonNull;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import java.net.InetAddress;
import java.util.Map;
import java.util.HashMap;

public class InternetCon extends ReactContextBaseJavaModule {
    InternetCon(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "InternetCon";
    }

    private boolean isNetworkConnected() {
        ConnectivityManager cm = (ConnectivityManager) getCurrentActivity().getSystemService(Context.CONNECTIVITY_SERVICE);

        return cm.getActiveNetworkInfo() != null && cm.getActiveNetworkInfo().isConnected();
    }

    public boolean isInternetAvailable() {
        try {
            InetAddress ipAddr = InetAddress.getByName("google.com");
            //You can replace it with your name
            return !ipAddr.equals("");

        } catch (Exception e) {
            return false;
        }
    }

    @ReactMethod
    public void getInternetStatus(Callback callBack) {
        if (isInternetAvailable() && isNetworkConnected()) {
            //connected
            callBack.invoke("YES");
        } else {
            //not connected
            callBack.invoke("NO");
        }
    }
}
