import android.os.Bundle;
import org.apache.cordova.*;

public class CordovaListview extends CordovaActivity
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        super.init();
        // Set by <content src="index.html"> in config.xml

        super.appView.getSettings().setJavaScriptEnabled(true);
            super.appView.addJavascriptInterface(this,"CordovaListview");

        super.loadUrl(Config.getStartUrl());
        //super.loadUrl("file:///android_asset/www/index.html")
    }
}