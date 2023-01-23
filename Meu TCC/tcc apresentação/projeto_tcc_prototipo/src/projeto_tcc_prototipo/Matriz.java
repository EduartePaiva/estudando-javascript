/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package projeto_tcc_prototipo;

import java.util.Random;

/**
 *
 * @author Eduarte
 */
public class Matriz {
    private Bloco_matriz[][] tabela;
    private int numeros_primos[] = {2,3,5,7,11,13};
    

    public Matriz() {
        this.tabela = new Bloco_matriz [5][5];
    }
    
    public static Matriz instancia;
    
    public static Matriz getInstancia(){
        if(instancia == null){
            instancia = new Matriz();
        }
        return instancia;
    }
    
    public static void deletarInstancia(){
        instancia = null;
    }

    public Bloco_matriz[][] getTabela() {
        return tabela;
    }

    public void setTabela(Bloco_matriz[][] tabela) {
        this.tabela = tabela;
    }
    
    
    
    public void Gerar_matriz1(){
        tabela[0][0] = new Bloco_matriz("nula",0,0);
        tabela[0][1] = new Bloco_matriz("nula",0,1);
        tabela[0][2] = new Bloco_matriz("produto_baixo",0,2);
        tabela[0][3] = new Bloco_matriz("produto_baixo",0,3);
        tabela[0][4] = new Bloco_matriz("nula",0,4);
        tabela[1][0] = new Bloco_matriz("nula",1,0);
        tabela[1][1] = new Bloco_matriz("produto_all",1,1);
        tabela[1][2] = new Bloco_matriz("preencher",1,2);
        tabela[1][3] = new Bloco_matriz("preencher",1,3);
        tabela[1][4] = new Bloco_matriz("preencher",1,4);
        tabela[2][0] = new Bloco_matriz("produto_cima",2,0);
        tabela[2][1] = new Bloco_matriz("preencher",2,1);
        tabela[2][2] = new Bloco_matriz("preencher",2,2);
        tabela[2][3] = new Bloco_matriz("preencher",2,3);
        tabela[2][4] = new Bloco_matriz("produto_baixo",2,4);
        tabela[3][0] = new Bloco_matriz("nula",3,0);
        tabela[3][1] = new Bloco_matriz("preencher",3,1);
        tabela[3][2] = new Bloco_matriz("produto_cima",3,2);
        tabela[3][3] = new Bloco_matriz("preencher",3,3);
        tabela[3][4] = new Bloco_matriz("preencher",3,4);
        tabela[4][0] = new Bloco_matriz("produto_cima",4,0);
        tabela[4][1] = new Bloco_matriz("preencher",4,1);
        tabela[4][2] = new Bloco_matriz("preencher",4,2);
        tabela[4][3] = new Bloco_matriz("nula",4,3);
        tabela[4][4] = new Bloco_matriz("preencher",4,4);        
    }
    
    public void Gerar_matriz2(){
        tabela[0][0] = new Bloco_matriz("nula",0,0);
        tabela[0][1] = new Bloco_matriz("produto_baixo",0,1);
        tabela[0][2] = new Bloco_matriz("nula",0,2);
        tabela[0][3] = new Bloco_matriz("produto_baixo",0,3);
        tabela[0][4] = new Bloco_matriz("produto_baixo",0,4);
        tabela[1][0] = new Bloco_matriz("produto_cima",1,0);
        tabela[1][1] = new Bloco_matriz("preencher",1,1);
        tabela[1][2] = new Bloco_matriz("preencher",1,2);
        tabela[1][3] = new Bloco_matriz("preencher",1,3);
        tabela[1][4] = new Bloco_matriz("preencher",1,4);
        tabela[2][0] = new Bloco_matriz("nula",2,0);
        tabela[2][1] = new Bloco_matriz("preencher",2,1);
        tabela[2][2] = new Bloco_matriz("produto_all",2,2);
        tabela[2][3] = new Bloco_matriz("preencher",2,3);
        tabela[2][4] = new Bloco_matriz("preencher",2,4);
        tabela[3][0] = new Bloco_matriz("produto_cima",3,0);
        tabela[3][1] = new Bloco_matriz("preencher",3,1);
        tabela[3][2] = new Bloco_matriz("preencher",3,2);
        tabela[3][3] = new Bloco_matriz("preencher",3,3);
        tabela[3][4] = new Bloco_matriz("nula",3,4);
        tabela[4][0] = new Bloco_matriz("produto_cima",4,0);
        tabela[4][1] = new Bloco_matriz("preencher",4,1);
        tabela[4][2] = new Bloco_matriz("preencher",4,2);
        tabela[4][3] = new Bloco_matriz("nula",4,3);
        tabela[4][4] = new Bloco_matriz("nula",4,4);        
    }
    
    public void Gerar_matriz3(){
        tabela[0][0] = new Bloco_matriz("nula",0,0);
        tabela[0][1] = new Bloco_matriz("nula",0,1);
        tabela[0][2] = new Bloco_matriz("nula",0,2);
        tabela[0][3] = new Bloco_matriz("produto_baixo",0,3);
        tabela[0][4] = new Bloco_matriz("produto_baixo",0,4);
        tabela[1][0] = new Bloco_matriz("nula",1,0);
        tabela[1][1] = new Bloco_matriz("nula",1,1);
        tabela[1][2] = new Bloco_matriz("produto_all",1,2);
        tabela[1][3] = new Bloco_matriz("preencher",1,3);
        tabela[1][4] = new Bloco_matriz("preencher",1,4);
        tabela[2][0] = new Bloco_matriz("nula",2,0);
        tabela[2][1] = new Bloco_matriz("produto_all",2,1);
        tabela[2][2] = new Bloco_matriz("preencher",2,2);
        tabela[2][3] = new Bloco_matriz("preencher",2,3);
        tabela[2][4] = new Bloco_matriz("preencher",2,4);
        tabela[3][0] = new Bloco_matriz("produto_cima",3,0);
        tabela[3][1] = new Bloco_matriz("preencher",3,1);
        tabela[3][2] = new Bloco_matriz("preencher",3,2);
        tabela[3][3] = new Bloco_matriz("preencher",3,3);
        tabela[3][4] = new Bloco_matriz("preencher",3,4);
        tabela[4][0] = new Bloco_matriz("produto_cima",4,0);
        tabela[4][1] = new Bloco_matriz("preencher",4,1);
        tabela[4][2] = new Bloco_matriz("preencher",4,2);
        tabela[4][3] = new Bloco_matriz("preencher",4,3);
        tabela[4][4] = new Bloco_matriz("preencher",4,4);        
    }
    
    public void Gerar_jogo_matrizX(){
        int l;
        int c;
        Random gerador = new Random();
        for(l = 0;l<5;l++){
            for(c = 0;c<5;c++){
                Bloco_matriz bloco = tabela[l][c];
                if(bloco.getTipo_cedula().compareTo("preencher") == 0){
                    bloco.setNum_primo(numeros_primos[gerador.nextInt(6)]);
                }                
            }
        }
        
        for(l = 0;l<5;l++){
            for(c = 0;c<5;c++){
                Bloco_matriz bloco = tabela[l][c];
                if(bloco.getTipo_cedula().compareTo("produto_baixo") == 0){
                    //calcula para baixo
                    int j = l+1;
                    int produto = 1;
                    while(j < 5){
                        if(tabela[j][c].getTipo_cedula().compareTo("preencher") == 0){
                            produto *= tabela[j][c].getNum_primo();
                        }else{
                            break;
                        }
                        j++;
                    }
                    bloco.setNum_baixo(produto);
                    
                    
                }else if(bloco.getTipo_cedula().compareTo("produto_cima") == 0){
                    //calcula da direita para a esquerda
                    int k = c+1;
                    int produto = 1;
                    while(k < 5){
                        if(tabela[l][k].getTipo_cedula().compareTo("preencher") == 0){
                            produto *= tabela[l][k].getNum_primo();
                        }else{
                            break;
                        }
                        k++;
                    }
                    bloco.setNum_cima(produto);
                }else if(bloco.getTipo_cedula().compareTo("produto_all") == 0){
                    
                    //calcula pra baixo
                    int j = l+1;
                    int produto = 1;
                    while(j < 5){
                        if(tabela[j][c].getTipo_cedula().compareTo("preencher") == 0){
                            produto *= tabela[j][c].getNum_primo();
                        }else{
                            break;
                        }
                        j++;
                    }
                    bloco.setNum_baixo(produto);
                    
                    //calcula da direita para a esquerda
                    
                    int k = c+1;
                    produto = 1;
                    while(k < 5){
                        if(tabela[l][k].getTipo_cedula().compareTo("preencher") == 0){
                            produto *= tabela[l][k].getNum_primo();
                        }else{
                            break;
                        }
                        k++;
                    }
                    bloco.setNum_cima(produto);
                }    
            }
        }
    }
    
    
}
