export class JwtHelper {
    
    public static b64EncodeUnicode(str) {
      const a = encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) =>
        String.fromCharCode(+`0x${p1}`)
      );
      return btoa(a);
    }
  
    public static b64DecodeUnicode(str) {
      return decodeURIComponent(
        atob(str)
          .split("")
          .map(function(c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
    }
  }
  