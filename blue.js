//##################
//private blueclient b9.1
//by sonaxmods™
//contact me? Skype: SonaxModz Real
//##################

//setting up the maindir

var dir = new java.io.File(new android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe" + "/blue");
		if(!dir.exists()) dir.mkdir();

//setting up a constance

const
      beta = "b9",
      chat = ChatColor.AQUA + "Blue " + ChatColor.WHITE + beta + ChatColor.AQUA        
      + " > " + ChatColor.WHITE,
      ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
      Button = android.widget.Button,
      LinearLayout = android.widget.LinearLayout;
      RelativeLayout = android.widget.RelativeLayout;
      PopupWindow = android.widget.PopupWindow;
      ScrollView = android.widget.ScrollView;
      TextView = android.widget.TextView;
      numbers = android.text.InputType.TYPE_CLASS_NUMBER;
      number = android.text.InputType.TYPE_NUMBER_FLAG_SIGNED,
      CheckBox = android.widget.CheckBox,
      Switch = android.widget.Switch,
      ImageView = android.widget.ImageView,
      EditText = android.widget.EditText,
      CompoundButton = android.widget.CompoundButton,
      SeekBar = android.widget.SeekBar,
      ProgressBar = android.widget.ProgressBar,
      ToggleButton = android.widget.ToggleButton,
      Toast = android.widget.Toast,
      FrameLayout = android.widget.FrameLayout,
      Typeface = android.graphics.Typeface,
      Color = android.graphics.Color,
      View = android.view.View,
      ColorDrawable = android.graphics.drawable.ColorDrawable,
      Gravity = android.view.Gravity,
      BitmapFactory = android.graphics.BitmapFactory,
      ViewGroup = android.view.ViewGroup,
      GradientDrawable = android.graphics.drawable.GradientDrawable,
      Bitmap = android.graphics.Bitmap,
      Canvas = android.graphics.Canvas,
      Paint = android.graphics.Paint,
      Path = android.graphics.Path,
      LinearGradient = android.graphics.LinearGradient,
      Shader = android.graphics.Shader,
      MotionEvent = android.view.MotionEvent,
      PorterDuff = android.graphics.PorterDuff,
      BitmapDrawable = android.graphics.drawable.BitmapDrawable,
      StateListDrawable = android.graphics.drawable.StateListDrawable,
      ViewTreeObserver = android.view.ViewTreeObserver,
      TranslateAnimation = android.view.animation.TranslateAnimation,
      Animation = android.view.animation.Animation,
      ClipDrawable = android.graphics.drawable.ClipDrawable,
      LightingColorFilter = android.graphics.LightingColorFilter,
      WindowManager = android.view.WindowManager,
      DisplayMetrics = android.util.DisplayMetrics,
      Environment = android.os.Environment,
      File = java.io.File,
      FileOutputStream = java.io.FileOutputStream,
      Runnable = java.lang.Runnable,
      Base64 = android.util.Base64,
      sdcard = new android.os.Environment.getExternalStorageDirectory(),
      mcfontpath = sdcard + "/games/com.mojang",
      pathnew = sdcard + "/games/com.mojang/minecraftpe/blue",
      path = sdcard + "/games/com.mojang/minecraftpe",
      PathPix = "/games/com.mojang/minecraftpe/blue",
      AlertDialog = {
      Builder: function() {
      return android.app.AlertDialog.Builder; } },
      DialogInterface = android.content.DialogInterface,
      DataOutputStream = java.io.DataOutputStream,
      BufferedReader = java.io.BufferedReader,
      Thread = java.lang.Thread,
      TypedValue = android.util.TypedValue,
      Byte = java.lang.Byte,
      Context = android.content.Context,
      Handler = android.os.Handler,
      TextWatcher = android.text.TextWatcher,
      FileWriter = java.io.FileWriter,
      InputStreamReader = java.io.InputStreamReader,
      SpannableStringBuilder = android.text.SpannableStringBuilder,
      ImageSpan = android.text.style.ImageSpan,
      Spannable = android.text.Spannable,
      StringBuffer = java.lang.StringBuffer,
      Html = android.text.Html,
      ZipFile = java.util.zip.ZipFile,
      ByteBuffer = java.nio.ByteBuffer,
      MediaPlayer = android.media.MediaPlayer,
      String = java.lang.String,
      StringBuilder = java.lang.StringBuilder,
      printWriter = java.io.printWriter,
      RotateAnimation = android.view.animation.RotateAnimation,
      DecelerateInterpolator = android.view.animation.DecelerateInterpolator,
      LinearInterpolator = android.view.animation.LinearInterpolator,
      mainmenuopened = false;

//variables

var gravity = -0.07840000092983246;
var moving = false;
var dx = 0;
var dy = 0;
var mPosX = 0;
var mPosY = 0;
var velo = false;
var speed = false;
var speed1 = true;
var speed2 = false;
var speed3 = false;
var sptick = 0;
var hitbox = false;
var spam = false;
var spam1 = true;
var spam2 = false;
var spam3 = false;
var stick = 0;
var sstick = 0;
var ssstick = 0;
var maximalrange = 7;
var aimplayer = true;
var aimmobs = false;
var hitboxX = 10;
var hitboxY = 7.5;
var flight = false;
var glide = false;
var glide1 = true;
var glide2 = false;
var gtick = 0;
var PlayerDir = [ 0, 0, 0 ];
var DEG_TO_RAD = Math.PI / 180;
var MobDir = [0, 0, 0];
var GlideInProgress = false;
var swalk = false;
var scwalk = false;
var jesus = false;
var jesus1 = true;
var jesus2 = false;
var jesus3 = false;

var Launcher = {
isToolbox: function () {
return ctx.getPackageName() == "io.mrarm.mctoolbox";
 },
isBlockLauncher: function () {
		return(ctx.getPackageName() == "net.zhuoweizhang.mcpelauncher" || ctx.getPackageName() == "net.zhuoweizhang.mcpelauncher.pro");
	}
};

//minecraft utilitys

var Minecraft = {

Blue: {
	Font1: android.os.Build.VERSION.SDK_INT >= 14 ? android.graphics.Typeface.create("sans-serif-light", android.graphics.Typeface.NORMAL) : android.graphics.Typeface.DEFAULT,

 Font2: android.os.Build.VERSION.SDK_INT >= 14 ? android.graphics.Typeface.create("sans-serif-medium", android.graphics.Typeface.NORMAL) : android.graphics.Typeface.DEFAULT,

 Font3: android.os.Build.VERSION.SDK_INT >= 14 ? android.graphics.Typeface.create("sans-serif-bold", android.graphics.Typeface.BOLD) : android.graphics.Typeface.DEFAULT,
},
Url: {
		getUrlContents: function (url, result) {
			let t = new java.lang.Thread(new java.lang.Runnable({
				run: function () {
					try {
						let u = new java.net.URL(url);
						let allCont = new java.lang.StringBuilder();
						let con = u.openConnection();
						con.setIfModifiedSince(0);
						con.setRequestProperty("User-Agent", "Mozilla/5.0");
						con.setRequestProperty("Accept-Encoding", "UTF-8");
						let reader = new java.io.BufferedReader(new java.io.InputStreamReader(con.getInputStream(), "UTF-8"));
						let line = "";
						while((line = reader.readLine()) != null)
							allCont.append(line + "\n");
						reader.close();
						result(allCont.toString(), null);
					} catch(e) {
						toast(e);
						result(null, e);
					}
				}
			}));
			t.start();
		}
	},
Block: {
		isLiquid: function(id) {
			if (id >= 8 && id <= 11) return true;
			return false;
		},
		isLadder: function(id) {
			if (id = 65) return true;
			return false;
		},
		isWeb: function(id) {
			if (id = 30) return true;
			return false;
		},
		isIce: function(id) {
		if (id = 79 && id = 174) return true;
		return false;
		}
	},
	Player: {
		isInWater: function(){
			if(Minecraft.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 0.01, getPlayerZ())))return true;
			return false;
		},
		isOnWater: function(){
		if(Minecraft.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.3, getPlayerZ())))return true;
		return false;
		},
		isOnIce: function(){
		if(Minecraft.Block.isIce(getTile(getPlayerX(), getPlayerY() - 0.1, getPlayerZ())))return true;
		return false;
		},
		isOnLadder: function(){
		if(Minecraft.Block.isLadder(getTile(getPlayerX(), getPlayerY() + 0.1, getPlayerZ())))return true;
		return false;
		},
		onGround: function() {
			var y = getPlayerY();
			while (y > 1) y -= 1;

			if (Math.round(y * 100) == 62 && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Minecraft.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) return true;
			if (Math.round(y * 100) == 12 && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Minecraft.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) return true;
			return false;
		},
	  overGround: function() {
            var a = getPlayerY();
            while (a > 2) a -= 2;
            if (62 == Math.round(100 * a) && 0 != getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()) && !Minecraft.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()))) return true;
            if (12 == Math.round(100 * a) && 0 != getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()) && !Minecraft.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()))) return true;
            return false;
        },
		isCollidedHorizontally: function() {
			var x = getPlayerX();
			var z = getPlayerZ();
			var blockX = Math.round(x - 0.5);
			var blockZ = Math.round(z - 0.5);
			while (x < 1) x += 1;
			while (z < 1) z += 1;
			while (x > 1) x -= 1;
			while (z > 1) z -= 1;

			if (Math.round(x * 100) == 31) x -= 0.01;
			if (Math.round(z * 100) == 31) z -= 0.01;
			if (Math.round(x * 100) == 69) x += 0.01;
			if (Math.round(z * 100) == 69) z += 0.01;
			if (Math.round(x * 100) == 30) blockX--;
			if (Math.round(z * 100) == 30) blockZ--;
			if (Math.round(x * 100) == 70) blockX++;
			if (Math.round(z * 100) == 70) blockZ++;

			if (getTile(blockX, getPlayerY(), blockZ) == 0 && getTile(blockX, getPlayerY() - 1, blockZ) == 0) return false;

			if (Block.getDestroyTime(getTile(blockX, getPlayerY() - 1, blockZ)) <= 0.1 && Block.getDestroyTime(getTile(blockX, getPlayerY(), blockZ)) <= 0.1) return false;

			if (Math.round(x * 100) == 30 || Math.round(x * 100) == 70) return true;
			if (Math.round(z * 100) == 30 || Math.round(z * 100) == 70) return true;
			return false;
  },

toDirectionalVector: function(vector,yaw,pitch) {
vector[0] = Math.cos(yaw) * Math.cos(pitch); 
vector[1] = Math.sin(pitch); 
vector[2] = Math.sin(yaw) * Math.cos(pitch);
 }
},

Entity: {

nextEnt: function() {
var mobs = Entity.getAll();
var players = Server.getAllPlayers();
var small = maximalrange;
var ent = null;
for (var i = 0; i < mobs.length; i++) {
var x = Entity.getX(mobs[i]) - getPlayerX();
var y = Entity.getY(mobs[i]) - getPlayerY();
var z = Entity.getZ(mobs[i]) - getPlayerZ();
var dist = Math.sqrt(Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2));
if(dist < small && dist > 0 && Entity.getEntityTypeId(mobs[i]) <= 63 && Entity.getHealth(mobs[i]) >= 1){
if(aimmobs == true){
small = dist;
ent = mobs[i]						    
   }
 	}
}				
for (var i = 0; i < players.length; i++) {
var x = Entity.getX(players[i]) - getPlayerX();
var y = Entity.getY(players[i]) - getPlayerY();
var z = Entity.getZ(players[i]) - getPlayerZ();
var dist = Math.sqrt(Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2));
if(dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1){
if(aimplayer == true){
small = dist;
ent = players[i];
	 }
 }
}	
return ent;
  }
 }
};

//more funcs

function getTextFromFile(file) {

			var readed = (new java.io.BufferedReader(new java.io.FileReader(file)));
			var data = new java.lang.StringBuilder();
			var string;
			while((string = readed.readLine()) != null)
				data.append(string + "\n");
			return data.toString();
}

//making some gradients

var mainbg = new GradientDrawable();
    mainbg.setColor(android.graphics.Color.BLACK);
    mainbg.setStroke(4, android.graphics.Color.rgb(0,229,240));
    mainbg.setAlpha(190);
    mainbg.setCornerRadius(2.5);

var bgmods = new GradientDrawable();
    bgmods.setColor(Color.GRAY);
    bgmods.setStroke(4, android.graphics.Color.rgb(0,229,240));
    bgmods.setAlpha(85);

var bgnothing = new GradientDrawable();
    bgnothing.setColor(android.graphics.Color.TRANSPARENT);

//initting a watermark


var GUIwatermark;
 function dip2px(dips){
 var ctxl = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
      }
var ctxl = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctxl.runOnUiThread(new java.lang.Runnable({ run: function(){
try{
var layoutwatermark = new android.widget.LinearLayout(ctx);
layoutwatermark.setOrientation(1);

imagew = android.util.Base64.decode(bluemark,0); 
var wmark = new android.widget.ImageView(ctx);
wmark.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(imagew,0,imagew.length));
wmark.setOnClickListener(new View.OnClickListener({
onClick: function(viewarg){
if(mainmenuopened == false){
BChud();
mainmenuopened = true;
}else{
if(mainmenuopened == true){
BCwindow.dismiss();
mainmenuopened = false;
  }
 }
}
}));
wmark.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function(a, b) {
try {
if (!moving) return false;
switch (b.getAction()) {
   case android.view.MotionEvent.ACTION_DOWN:
 dx = mPosX - b.getRawX();
 dy = mPosY - b.getRawY();
   break;
 case android.view.MotionEvent.ACTION_MOVE:
     mPosX = b.getRawX() + dx;
     mPosY = b.getRawY() + dy;
     GUIwatermark.update(mPosX, mPosY, -1, -1);
   break;
 case android.view.MotionEvent.ACTION_UP:
  case android.view.MotionEvent.ACTION_CANCEL:
  moving = false;
   }
  } catch (c) {}
    return true;
  }
}));
wmark.setOnLongClickListener(new android.view.View.OnLongClickListener({
 onLongClick: function(a, b) {
moving = true;
return true;
 }
}));
layoutwatermark.addView(wmark);

      GUIwatermark = new android.widget.PopupWindow(layoutwatermark, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
      GUIwatermark.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
      GUIwatermark.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM, 5,1095);
      }catch(err){
      print('An error occured: ' + err);
      }
      }}));


//making a hud

function BChud(){
ctx.runOnUiThread(new Runnable({ run: function(){
		try{
		
	var mainlayout = new LinearLayout(ctx);
                mainlayout.setOrientation(1);
                var scrollmain = new ScrollView(ctx);
                var mainhelper = new LinearLayout(ctx);
                mainhelper.setOrientation(1);
                scrollmain.addView(mainlayout);
                mainhelper.addView(scrollmain);
                mainhelper.setBackground(mainbg);

 const categorymain = new TextView(ctx);
categorymain.setTextColor(Color.WHITE);
categorymain.setTextSize(15);
categorymain.setText(" ");
categorymain.setTypeface(Minecraft.Blue.Font3);
categorymain.setGravity(Gravity.CENTER);
categorymain.setBackground(bgmods);
//categorymain.setPadding(100,0,0,0);
categorymain.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function(a, b) {
try {
if (!moving) return false;
switch (b.getAction()) {
   case android.view.MotionEvent.ACTION_DOWN:
 dx = mPosX - b.getRawX();
 dy = mPosY - b.getRawY();
   break;
 case android.view.MotionEvent.ACTION_MOVE:
     mPosX = b.getRawX() + dx;
     mPosY = b.getRawY() + dy;
     BCwindow.update(mPosX, mPosY, -1, -1);
   break;
 case android.view.MotionEvent.ACTION_UP:
  case android.view.MotionEvent.ACTION_CANCEL:
  moving = false;
   }
  } catch (c) {}
    return true;
  }
}));
categorymain.setOnLongClickListener(new android.view.View.OnLongClickListener({
 onLongClick: function(a, b) {
moving = true;
return true;
 }
}));
mainlayout.addView(categorymain);         

const module2 = new Switch(ctx);
module2.setText("Spammer");
module2.setTextColor(spam? Color.rgb(0,229,240) : Color.WHITE);
module2.setTypeface(Minecraft.Blue.Font2);
module2.setBackground(bgnothing);
module2.setTextSize(16);
module2.setChecked(spam);
module2.setGravity(Gravity.CENTER);
module2.setPadding(0, 25, 80, 0);
module2.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function() {
if(!spam){
		   spam = true;
      stick = 0;
      sstick = 0;
      ssstick = 0;
      arraylayout.addView(array1);
				module2.setTextColor(Color.rgb(0,229,240));
				}else{
				spam = false;
      stick = 0;
      sstick = 0;
      ssstick = 0;
      arraylayout.removeView(array1);
			 	module2.setTextColor(Color.WHITE);
				 }
     module2.setChecked(spam);
 }
}));
mainlayout.addView(module2);

const module8 = new Switch(ctx);
module8.setText("Safewalk");
module8.setTextColor(swalk? Color.rgb(0,229,240) : Color.WHITE);
module8.setTypeface(Minecraft.Blue.Font2);
module8.setBackground(bgnothing);
module8.setTextSize(16);
module8.setChecked(swalk);
module8.setGravity(Gravity.CENTER);
module8.setPadding(0, 25, 80, 0);
module8.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function() {
if(!swalk){
		   swalk = true;
				module8.setTextColor(Color.rgb(0,229,240));
				}else{
				swalk = false;
			 	module8.setTextColor(Color.WHITE);
				 }
     module8.setChecked(swalk);
 }
}));
mainlayout.addView(module8);

const module9 = new Switch(ctx);
module9.setText("Scaffold");
module9.setTextColor(scwalk? Color.rgb(0,229,240) : Color.WHITE);
module9.setTypeface(Minecraft.Blue.Font2);
module9.setBackground(bgnothing);
module9.setTextSize(16);
module9.setChecked(scwalk);
module9.setGravity(Gravity.CENTER);
module9.setPadding(0, 25, 80, 0);
module9.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function() {
if(!scwalk){
		   scwalk = true;
				module9.setTextColor(Color.rgb(0,229,240));
				}else{
				scwalk = false;
			 	module9.setTextColor(Color.WHITE);
				 }
     module9.setChecked(scwalk);
 }
}));
mainlayout.addView(module9);

const module1 = new Switch(ctx);
module1.setText("Hitboxes");
module1.setTextColor(hitbox? Color.rgb(0,229,240) : Color.WHITE);
module1.setTypeface(Minecraft.Blue.Font2);
module1.setBackground(bgnothing);
module1.setTextSize(16);
module1.setChecked(hitbox);
module1.setGravity(Gravity.CENTER);
module1.setPadding(0, 25, 80, 0);
module1.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function() {
if(!hitbox){
		   hitbox = true;
				module1.setTextColor(Color.rgb(0,229,240));
				}else{
				hitbox = false;
			 	module1.setTextColor(Color.WHITE);
				 }
     module1.setChecked(hitbox);
 }
}));
mainlayout.addView(module1);

const module3 = new Switch(ctx);
module3.setText("Velocity");
module3.setTextColor(velo? Color.rgb(0,229,240) : Color.WHITE);
module3.setTypeface(Minecraft.Blue.Font2);
module3.setBackground(bgnothing);
module3.setTextSize(16);
module3.setChecked(velo);
module3.setGravity(Gravity.CENTER);
module3.setPadding(0, 25, 80, 0);
module3.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function() {
if(!velo){
		   velo = true;
				module3.setTextColor(Color.rgb(0,229,240));
				}else{
				velo = false;
			 	module3.setTextColor(Color.WHITE);
				 }
     module3.setChecked(velo);
 }
}));
mainlayout.addView(module3);

const module10 = new Switch(ctx);
module10.setText("Jesus");
module10.setTextColor(jesus? Color.rgb(0,229,240) : Color.WHITE);
module10.setTypeface(Minecraft.Blue.Font2);
module10.setBackground(bgnothing);
module10.setTextSize(16);
module10.setChecked(jesus);
module10.setGravity(Gravity.CENTER);
module10.setPadding(0, 25, 80, 0);
module10.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function() {
if(!jesus){
		   jesus = true;
				module10.setTextColor(Color.rgb(0,229,240));
				}else{
				jesus = false;
			 	module10.setTextColor(Color.WHITE);
				 }
     module10.setChecked(jesus);
 }
}));
mainlayout.addView(module10);

const module5 = new Switch(ctx);
module5.setText("Speed");
module5.setTextColor(speed? Color.rgb(0,229,240) : Color.WHITE);
module5.setTypeface(Minecraft.Blue.Font2);
module5.setBackground(bgnothing);
module5.setTextSize(16);
module5.setChecked(speed);
module5.setGravity(Gravity.CENTER);
module5.setPadding(0, 25, 80, 0);
module5.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function() {
if(!speed){
      speed = true;
				module5.setTextColor(Color.rgb(0,229,240));
				}else{
      speed = false;
      deinitSpeedFrc();
			 	module5.setTextColor(Color.WHITE);
				 }/*

     if(speed2){
     speed2 = false;
     module6.setTextColor(Color.WHITE);
     module6.setChecked(speed2);
     }	*/
     module5.setChecked(speed);
 }
}));
mainlayout.addView(module5);
/*
const module6 = new Switch(ctx);
module6.setText("Speed2");
module6.setTextColor(speed2? Color.rgb(0,229,240) : Color.WHITE);
module6.setTypeface(Minecraft.Blue.Font2);
module6.setBackground(bgnothing);
module6.setTextSize(16);
module6.setChecked(speed2);
module6.setGravity(Gravity.CENTER);
module6.setPadding(0, 25, 80, 0);
module6.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function() {
if(!speed2){
		   speed2 = true;
				module6.setTextColor(Color.rgb(0,229,240));
				}else{
				speed2 = false;
			 	module6.setTextColor(Color.WHITE);
				 }
     if(speed){
     speed = false;
     module5.setTextColor(Color.WHITE);
     module5.setChecked(speed);
     }	
     module6.setChecked(speed2);
 }
}));
mainlayout.addView(module6);
*/
const module4 = new Switch(ctx);
module4.setText("Flight");
module4.setTextColor(flight? Color.rgb(0,229,240) : Color.WHITE);
module4.setTypeface(Minecraft.Blue.Font2);
module4.setBackground(bgnothing);
module4.setTextSize(16);
module4.setChecked(flight);
module4.setGravity(Gravity.CENTER);
module4.setPadding(0, 25, 80, 0);
module4.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function() {
if(!flight){
		   flight = true;
				module4.setTextColor(Color.rgb(0,229,240));
				}else{
				flight = false;
      Player.setFlying(false);
			 	module4.setTextColor(Color.WHITE);
				 }
     module4.setChecked(flight);
 }
}));
mainlayout.addView(module4);

const module7 = new Switch(ctx);
module7.setText("Glide");
module7.setTextColor(glide? Color.rgb(0,229,240) : Color.WHITE);
module7.setTypeface(Minecraft.Blue.Font2);
module7.setBackground(bgnothing);
module7.setTextSize(16);
module7.setChecked(glide);
module7.setGravity(Gravity.CENTER);
module7.setPadding(0, 25, 80, 0);
module7.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function() {
if(!glide){
if(glide2){
      setPosition(getPlayerEnt(), getPlayerX(), getPlayerY()+1, getPlayerZ());
      }
		   glide = true;
      GlideInProgress = false;
				module7.setTextColor(Color.rgb(0,229,240));
				}else{
				glide = false;
      GlideInProgress = false;
			 	module7.setTextColor(Color.WHITE);
				 }
     module7.setChecked(glide);
 }
}));
mainlayout.addView(module7);

var nothing = new TextView(ctx);
nothing.setTextSize(10);
nothing.setText("  ");
mainlayout.addView(nothing);

const categorymain2 = new TextView(ctx);
categorymain2.setTextColor(Color.WHITE);
categorymain2.setTextSize(15);
categorymain2.setText(" ");
categorymain2.setTypeface(Minecraft.Blue.Font3);
categorymain2.setGravity(Gravity.CENTER);
categorymain2.setBackground(bgmods);
//categorymain2.setPadding(100,0,0,0);
/*
categorymain2.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function(a, b) {
try {
if (!moving) return false;
switch (b.getAction()) {
   case android.view.MotionEvent.ACTION_DOWN:
 dx = mPosX - b.getRawX();
 dy = mPosY - b.getRawY();
   break;
 case android.view.MotionEvent.ACTION_MOVE:
     mPosX = b.getRawX() + dx;
     mPosY = b.getRawY() + dy;
     BCwindow.update(mPosX, mPosY, -1, -1);
   break;
 case android.view.MotionEvent.ACTION_UP:
  case android.view.MotionEvent.ACTION_CANCEL:
  moving = false;
   }
  } catch (c) {}
    return true;
  }
}));
categorymain2.setOnLongClickListener(new android.view.View.OnLongClickListener({
 onLongClick: function(a, b) {
moving = true;
return true;
 }
}));*/
mainlayout.addView(categorymain2);         

//buttontheme
/*
const module7 = new Button(ctx);
module7.setText("Glide");
module7.setTextColor(glide? Color.rgb(0,229,240) : Color.WHITE);
module7.setTypeface(Minecraft.Blue.Font2);
module7.setBackground(bgnothing);
module7.setTextSize(14);
module7.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
if(!glide){
		   glide = true;
				module7.setTextColor(Color.rgb(0,229,240));
				}else{
				glide = false;
			 	module7.setTextColor(Color.WHITE);
      GlideInProgress = false;
				 }
}
}));
mainlayout.addView(module7);
*/


BCwindow = new PopupWindow(mainhelper, ctx.getWindowManager().getDefaultDisplay().getWidth()/4, RelativeLayout.LayoutParams.WRAP_CONTENT);
BCwindow.setAnimationStyle(android.R.style.Animation_Toast);
BCwindow.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP,0,0);
			}catch(error){
				Toast.makeText(ctx, "An error occured: " + error, 1).show();
			}
	}}));
}

//making a common arraylist button

function arraybutton(size,typeface,color,bg,gravity,text){
ctx.runOnUiThread(new Runnable({ run: function(){
	try{
arrayname = new TextView(ctx);
arrayname.setTextSize(size);
arrayname.setTypeface(typeface);
arrayname.setTextColor(color);
arrayname.setBackground(bg);
arrayname.setGravity(gravity);
arrayname.setText("  " + text + "  ");
}catch(err){
			Toast.makeText(ctx, "An error occured: " + err, 1).show();
		}
	}}));
}

//setting up a arraylist

ctx.runOnUiThread(new Runnable({ run: function(){
	try{
arraylayout = new LinearLayout(ctx);
		arraylayout.setOrientation(1);

var bgarray = new android.graphics.drawable.GradientDrawable();
					bgarray.setColor(android.graphics.Color.BLACK);
       bgarray.setAlpha(180);
       bgarray.setStroke(4, android.graphics.Color.rgb(0,229,240));
       bgarray.setCornerRadius(dip2px(1));

const array1 = new arraybutton(15,Minecraft.Blue.Font1,Color.rgb(0,229,240),bgarray,Gravity.CENTER,"Spammer");


GUIarray = new PopupWindow(arraylayout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
		GUIarray.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
		GUIarray.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 59);
		
		}catch(err){
			Toast.makeText(ctx, "An error occured: " + err, 1).show();
		}
	}}));


//initting hooks

//outhook-variables

var smsg = [0,2,4,6,8,10,12,14,16,18,20];

function modTick(){

//in-hook variables

var curspeed = Math.sqrt(Math.pow(Entity.getVelX(getPlayerEnt()), 2) + Math.pow(Entity.getVelZ(getPlayerEnt()), 2));

//on tick called mods

if(hitbox){
var nextentity = Minecraft.Entity.nextEnt(8);
if(nextentity != null){
Entity.setCollisionSize(nextentity, hitboxX, hitboxY);
} else {
if(!hitbox){
Entity.setCollisionSize(nextentity, 0.6, 1.8);
   }
  }
 }
if(swalk && !Minecraft.Player.isInWater()){
if(!Entity.isSneaking(getPlayerEnt())){
Entity.setSneaking(getPlayerEnt(), true);
 }
}
if(flight && !Minecraft.Player.onGround() && !Minecraft.Player.isInWater()){
Player.setFlying(true);
}
if(glide){
if(glide1 && !Minecraft.Player.onGround()){
if(!Minecraft.Player.isInWater()){
if(curspeed >= 0.15){
Minecraft.Player.toDirectionalVector(PlayerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);     
setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*1.06);
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*1.06);
gtick++;
if(gtick == null) gtick--;
if(gtick == 5) {
GlideInProgress = true;
setVelY(getPlayerEnt(),  0.68);
setVelX(getPlayerEnt(), -1* Math.sin( Entity.getYaw(getPlayerEnt()) / 180 * Math.PI));
setVelZ(getPlayerEnt(), 1* Math.cos( Entity.getYaw(getPlayerEnt()) / 180 * Math.PI));
}
if(gtick >= 10){
GlideInProgress = false;
setVelY(getPlayerEnt(), -0.37);
gtick = 0;
   }
  }
 }
if(Minecraft.Player.isInWater() && curspeed >= 0.6){
setVelY(getPlayerEnt(), 0.3);
 }
}
if(glide2){
if(!Minecraft.Player.onGround() && !Minecraft.Player.isCollidedHorizontally()){
setVelY(getPlayerEnt(), -0.0175);
setVelX(getPlayerEnt(), 1.03 * Entity.getVelX(getPlayerEnt()));
setVelZ(getPlayerEnt(), 1.03 * Entity.getVelZ(getPlayerEnt()));
  }
 }
}
if(speed) {
if(speed1 && curspeed >= 0.12 && Minecraft.Player.onGround()
 && !Entity.isSneaking(getPlayerEnt(), true)){

setVelY(getPlayerEnt(), 0.34);
initSpeedFrc();

setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*1.9);
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*1.9);

} else {
if(!speed1 && speed){
deinitSpeedFrc();
 } 
if(curspeed <= 0.12){
deinitSpeedFrc();
 } 
if(!Entity.isSneaking(getPlayerEnt(), true)){
deinitSpeedFrc();
    }
   }
if(speed2 && curspeed >= 0.11 && Minecraft.Player.onGround()
&& !Entity.isSneaking(getPlayerEnt(), true)){
sptick++;
if(sptick == 3){
setVelX(getPlayerEnt(), -1.27* Math.sin( Entity.getYaw(getPlayerEnt()) / 180 * Math.PI));
setVelZ(getPlayerEnt(), 1.27* Math.cos( Entity.getYaw(getPlayerEnt()) / 180 * Math.PI));
 }
if(sptick >= 8){
setVelX(getPlayerEnt(), 0.5* Math.sin( Entity.getYaw(getPlayerEnt()) / 180 * Math.PI));
setVelZ(getPlayerEnt(), -0.5* Math.cos( Entity.getYaw(getPlayerEnt()) / 180 * Math.PI));
sptick = 0;
  }
 }
if(speed3){
initspeed3();
 }
}
if(velo){
this.tick = 0;
        if (this.health > Entity.getHealth(getPlayerEnt())) {
            this.tick = 5;
            Entity.setImmobile(getPlayerEnt(), true);
        }
        if (0 == this.tick) Entity.setImmobile(getPlayerEnt(), false);                                 
        this.health = Entity.getHealth(getPlayerEnt());
        if (0 != this.tick) tick--;
}
var random1 = Math.floor(Math.random()*(34000-33850)+(450-23+1));
var random2 = Math.floor(Math.random()*(34480-33298)+(450+15-10));
var random3 = Math.floor(Math.random()*(38280-33293)+(380+35-30));
if(spam){
if(spam1){
ssstick++;
if(ssstick == 50){
Server.sendChat(random1 + " -" + " Blue Client " + beta + " - " + random3 + " - " + "By SonaxMods and Bluelex - " + random2);
}
if(ssstick == 250){
Server.sendChat("BLUECLIENT");
}
if(ssstick >= 449){
ssstick = 0;
   }
  }
if(spam2){
sstick++;
if(sstick == 0){
Server.sendChat(smsg[0]);
} if(sstick == 100){
Server.sendChat(smsg[1]);
} if(sstick == 180){
Server.sendChat(smsg[2]);
} if(sstick == 260){
Server.sendChat(smsg[3]);
} if(sstick == 340){
Server.sendChat(smsg[4]);
} if(sstick == 420){
Server.sendChat(smsg[5]);
} if(sstick == 500){
Server.sendChat(smsg[6]);
} if(sstick == 580){
Server.sendChat(smsg[7]);
} if(sstick == 960){
Server.sendChat(smsg[8]);
} if(sstick == 1040){
Server.sendChat(smsg[9]);
} if(sstick == 1120){
Server.sendChat(smsg[10]);
} if(sstick == 1200){
Server.sendChat(smsg[11]);
} if(sstick == 1380){
Server.sendChat(smsg[0]);
} if(sstick == 1460){
Server.sendChat(smsg[1]);
} if(sstick == 1540){
Server.sendChat(smsg[2]);
} if(sstick == 1620){
Server.sendChat(smsg[3]);
 } if(sstick == 1700){
Server.sendChat(smsg[4]);
} if(sstick == 1780){
Server.sendChat(smsg[5]);
} if(sstick == 1860){
Server.sendChat(smsg[6]);
} if(sstick == 1940){
Server.sendChat(smsg[7]);
sstick = 0;
 }
}
if(spam4){
ssstick++;

if(ssstick == 0){
Server.sendChat("@all Hacking izz kuhl");
}
if(ssstick == 200){
Server.sendChat("@all Hows it going?");
}
if(ssstick == 400){
Server.sendChat("@all Sub to SonaxMods and Bluelex on Y - T");
ssstick = 0;
 }
}
if(spam3){
stick++;

if(stick == 0){
Server.sendChat("blueclient " + beta);
} 
if(stick == 100){
Server.sendChat("Im not using da Blueclient | haha");
 }
if(stick == 250){
Server.sendChat("Blueclient by SonaxMods " + "| " + "lol");
}
if(stick == 325){
Server.sendChat("hacking is cool " + "| " + ":3");
}
if(stick == 450){
Server.sendChat("BLUE is COOL" + " | " + "C:");
}
if(stick == 575){
Server.sendChat("resetting spammer... | :D");
 }
if(stick >= 680){
stick = 0;
    }
   }
  }
if(jesus){
if(jesus2){
if(getTile(getPlayerX(), getPlayerY() -2, getPlayerZ()) == 8 || getTile(getPlayerX() ,getPlayerY()-2, getPlayerZ()) == 9 || getTile(getPlayerX() ,getPlayerY()-2, getPlayerZ()) == 10) {
setVelX(getPlayerEnt(),-0.3* Math.sin( Entity.getYaw(getPlayerEnt()) / 180 * Math.PI));
setVelZ(getPlayerEnt(),0.3 * Math.cos( Entity.getYaw(getPlayerEnt()) / 180 * Math.PI));
setVelY(getPlayerEnt(), 0.15);
   }
  }
if(jesus1){
if(getTile(getPlayerX(), getPlayerY() -0.8, getPlayerZ()) == 8 || getTile(getPlayerX() ,getPlayerY()-0.8, getPlayerZ()) == 9 || getTile(getPlayerX() ,getPlayerY()-0.8, getPlayerZ()) == 10) {
setVelX(getPlayerEnt(),-0.3* Math.sin( Entity.getYaw(getPlayerEnt()) / 180 * Math.PI));
setVelZ(getPlayerEnt(),0.3 * Math.cos( Entity.getYaw(getPlayerEnt()) / 180 * Math.PI));
setVelY(getPlayerEnt(), 0.3);
   }
  }
if(jesus3){
if(getTile(getPlayerX(), getPlayerY() +1.2, getPlayerZ()) == 8 || getTile(getPlayerX() ,getPlayerY()+1.2, getPlayerZ()) == 9 || getTile(getPlayerX() ,getPlayerY()+1.2, getPlayerZ()) == 10) {
setVelX(getPlayerEnt(),-0.9* Math.sin( Entity.getYaw(getPlayerEnt()) / 180 * Math.PI));
setVelZ(getPlayerEnt(),0.9 * Math.cos( Entity.getYaw(getPlayerEnt()) / 180 * Math.PI));
setVelY(getPlayerEnt(), 0.35);
   }
  }
 }
};
function initSpeedFrc() {
for(var i = 1; i <= 256; i++){
Block.setFriction(i, 0.4);
 }
}
function deinitSpeedFrc() {
for(var i = 1; i <= 256; i++){
Block.setFriction(i, 0.6);
 }
}
function initspeed3(){
for(var i = 1; i <= 256; i++){
Block.setFriction(i, 0.42);
 }
}
function deinitspeed3() {
for(var i = 1; i <= 256; i++){
Block.setFriction(i, 0.6);
 }
}

//setting up a on item calling hook

function useItem(x,y,z,side,blockid,itemid,side,itemDamage,blockDamage){
if(scwalk && !Minecraft.Player.isInWater() && getCarriedItem()!= 0 && getCarriedItem() <= 256){
if(Math.abs(x - getPlayerX()) > 1.5 || Math.abs(z - getPlayerZ()) > 1.5){
return;
}
setVelX(getPlayerEnt(),-0.46*Math.sin( Entity.getYaw(getPlayerEnt()) / 180 * Math.PI));
setVelZ(getPlayerEnt(),0.46*Math.cos( Entity.getYaw(getPlayerEnt()) / 180  * Math.PI));
Entity.setSneaking(getPlayerEnt(), true);
 }
}

//setting up a command system

var prefix = "#";
function chatHook(text) {
var split = text.split(" ");

if(split[0] == prefix + "help"){
preventDefault();
clientMessage("                                                        ");
clientMessage("      ===="+ ChatColor.AQUA + "HELPPAGE" + ChatColor.WHITE + "====      ");
clientMessage(" ");
clientMessage(prefix + ChatColor.AQUA + "speed " + ChatColor.WHITE + "[" + ChatColor.AQUA + "mode" + ChatColor.WHITE + "]");
clientMessage(prefix + ChatColor.AQUA + "speedhelp" + ChatColor.WHITE);
clientMessage(prefix + ChatColor.AQUA + "glide " + ChatColor.WHITE + "[" + ChatColor.AQUA + "mode" + ChatColor.WHITE + "]");
clientMessage(prefix + ChatColor.AQUA + "glidehelp" + ChatColor.WHITE);
clientMessage(prefix + ChatColor.AQUA + "prefix " + ChatColor.WHITE + "[" + ChatColor.AQUA + "prefix" + ChatColor.WHITE + "]");
clientMessage(prefix + ChatColor.AQUA + "spammer " + ChatColor.WHITE + "[" + ChatColor.AQUA + "mode" + ChatColor.WHITE + "]");
clientMessage(prefix + ChatColor.AQUA + "spammerhelp" + ChatColor.WHITE);
clientMessage(prefix + ChatColor.AQUA + "jesus " + ChatColor.WHITE + "[" + ChatColor.AQUA + "mode" + ChatColor.WHITE + "]");
clientMessage(prefix + ChatColor.AQUA + "jesushelp" + ChatColor.WHITE);
clientMessage(prefix + ChatColor.AQUA + "hitboxX " + "or " + prefix + " hitboxY " + ChatColor.WHITE + "[" + ChatColor.AQUA + "value" + ChatColor.WHITE + "]");
clientMessage(" ");
clientMessage("      ================      ");
 }
if(split[0] == prefix + "speed"){
preventDefault();
clientMessage("Speedmode = " + ChatColor.AQUA + split[1]);

if(split[1] == "lbhop1") {
speed2 = false;
speed1 = true;
speed3 = false;
 }
if(split[1] == "lbframes") {
speed2 = true;
speed1 = false;
speed3 = false;
 }
if(split[1] == "vanilla1") {
speed2 = false;
speed1 = false;
speed3 = true
 }
}
if(split[0] == prefix + "hitboxX"){
preventDefault();
clientMessage("X hitbox = " + ChatColor.AQUA + split[1]);
hitboxX = split[1];
} if(split[0] == prefix + "hitboxY"){
preventDefault();
clientMessage("Y hitbox = " + ChatColor.AQUA + split[1]);
hitboxY = split[1];
}

if(split[0] === prefix + "speedhelp") {
preventDefault();
clientMessage("                                                        ");
clientMessage("      ===="+ ChatColor.AQUA + "SPEEDMODES" + ChatColor.WHITE + "====      ");
clientMessage(" ");
clientMessage(ChatColor.AQUA + " > lbhop1 \n" + " > lbframes \n" + " > vanilla1 \n");
clientMessage("(" + ChatColor.AQUA + "remember to do " + prefix + "speed " + ChatColor.AQUA + "-mode-" + ChatColor.WHITE + ")");
clientMessage(" ");
clientMessage("      ==================      ");
 }
if(split[0] == prefix + "glide"){
preventDefault();
clientMessage("Glidemode = " + ChatColor.AQUA + split[1]);

if(split[1] == "bounce1") {
glide2 = false;
glide1 = true;
 }
if(split[1] == "lbsg") {
glide2 = true;
glide1 = false;
 }
}
if(split[0] === prefix + "glidehelp") {
preventDefault();
clientMessage("                                                        ");
clientMessage("      ===="+ ChatColor.AQUA + "GLIDEMODES" + ChatColor.WHITE + "====      ");
clientMessage(" ");
clientMessage(ChatColor.AQUA + " > lbsg \n" + " > bounce1 \n");
clientMessage("(" + ChatColor.AQUA + "remember to do " + prefix + "glide " + ChatColor.AQUA + "-mode-" + ChatColor.WHITE + ")");
clientMessage(" ");
clientMessage("      ==================      ");
 }
if(split[0] == prefix + "jesus"){
preventDefault();
clientMessage("Jesusmode = " + ChatColor.AQUA + split[1]);

if(split[1] == "dolphin") {
jesus2 = false;
jesus1 = true;
jesus3 = false;
 }
if(split[1] == "poshop") {
jesus2 = true;
jesus1 = false;
jesus3 = false;
 }
if(split[1] == "minhop") {
jesus2 = false;
jesus1 = false;
jesus3 = true;
 }
}
if(split[0] === prefix + "jesushelp") {
preventDefault();
clientMessage("                                                        ");
clientMessage("      ===="+ ChatColor.AQUA + "JESUSMODES" + ChatColor.WHITE + "====      ");
clientMessage(" ");
clientMessage(ChatColor.AQUA + " > dolphin \n" + " > poshop \n" +  " > minhop \n");
clientMessage("(" + ChatColor.AQUA + "remember to do " + prefix + "jesus " + ChatColor.AQUA + "-mode-" + ChatColor.WHITE + ")");
clientMessage(" ");
clientMessage("      ==================      ");
 }
if(split[0] == prefix + "prefix") {
 preventDefault();
  prefix = split[1];
 clientMessage("Clientprefix set to "+ ChatColor.AQUA + split[1]);
 }
if(split[0] == prefix + "spammer"){
preventDefault();
clientMessage("Spammermode = " + ChatColor.AQUA + split[1]);

if(split[1] == "lbsg1") {
spam1 = false;
spam2 = true;
spam3 = false;
spam4 = false;
 }
if(split[1] == "lbsg2") {
spam1 = false;
spam2 = false;
spam3 = false;
spam4 = true;
 }
if(split[1] == "other1") {
spam1 = true;
spam2 = false;
spam3 = false;
spam4 = false;
 }
if(split[1] == "other2") {
spam1 = false;
spam2 = false;
spam3 = true;
spam4 = false;
 }
}
if(split[0] === prefix + "spammerhelp") {
preventDefault();
clientMessage("                                                        ");
clientMessage("      ===="+ ChatColor.AQUA + "SPAMMERMODES" + ChatColor.WHITE + "====      ");
clientMessage(" ");
clientMessage(ChatColor.AQUA + " > lbsg1 \n" + " > lbsg2 \n" + " > other1 \n" + " > other2 \n");
clientMessage("(" + ChatColor.AQUA + "remember to do " + prefix + "speed " + ChatColor.AQUA + "-mode-" + ChatColor.WHITE + ")");
clientMessage(" ");
clientMessage("      ==================      ");
   }
  }

//base64 code

var bluemark = "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";

//decode base64code

Base64Decode(android.util.Base64.decode(bluemark, 0), pathnew + "/bluemark.png");

function Base64Decode(byteArray, Path) {
    try {
        var File = new java.io.File(Path);
        if (!File.exists()) {
            File.createNewFile();
            var Stream = new java.io.FileOutputStream(File);
            Stream.write(byteArray);
            Stream.close();
        }
        
    } catch (err) {
        print(err);
    }
}
