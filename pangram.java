Class Solution{
    public boolean CheckIfPangram(String sentence){
        Character[] charArray =sentence.chars().mapToObj(C ->(char)c).toArray(character[]::new));
        List<character>check=Arrays.asList(charArray);
        Set<character>st=new Hashset<>(check);
        return st.size()==26
    }
}