import java.util.HashMap;
public class RomanToInt{
    public static int romanToint(String s){
        if(s==null  || S.length() == 0)
        return -1;
        System.out.println("Roman Number:"+S);
        HashMap<character,Integer>map=newHashMap
        <character,Integer>();
        map.put('I',1);
        map.put('V',5);
        map.put('X',10);
        int len =s.length(),result=map.get(S..charAt(len - 1));
        for(inti= len -2; i>=0;i--){
            if(map.get(S.charAt(i))>=map.get(s.charAt(i+1))
            result+=map.get(s.charAt(i));
            else
            result-=map.get(s.charAt(i));
        }
        System.out.println("Integer:"+result);
        return result;
    }
    public static void main(String[] args){
        romanToInt("IX");
    }
}