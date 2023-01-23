/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package projeto_tcc_prototipo;

import javax.swing.JOptionPane;

/**
 *
 * @author Eduarte
 */
public class Tratamentos_tela_jogo {
    private static int numeros_primos[] = {2,3,5,7,11,13};

    public Tratamentos_tela_jogo() {
    }
    
    
    
    
    
    public static javax.swing.JLabel click_na_label(javax.swing.JLabel label_anterior, javax.swing.JLabel label_atual, boolean jogoFinalizado){
        if(!jogoFinalizado){
            if(label_anterior != null){
                label_anterior.setBackground(new java.awt.Color(240,240,240));
                //label_anterior.setOpaque(true);
            }        
            label_anterior = label_atual;
            label_anterior.setOpaque(true);
            label_anterior.setBackground(new java.awt.Color(185,252,187));

            String valor = JOptionPane.showInputDialog("Insira um número");
            if(testar_valor_inserido(valor)){
                label_anterior.setText(valor);
            }
        }else{
            JOptionPane.showMessageDialog(null, "Você já finalizou este jogo, clique em Novo Jogo");
        }
        return label_anterior;
    }
    
    public void novo_jogo(Matriz m, Lista_bloco_jlabel lista){
        int l;
        int c;
        for(l = 0;l<5;l++){
            for(c = 0;c<5;c++){
                if(m.getTabela()[l][c].getTipo_cedula().compareTo("preencher")== 0){
                    //lista.getBloco_matriz()[l][c].getLabel_principal().setText(String.valueOf(m.getTabela()[l][c].getNum_primo()));
                    lista.getBloco_matriz()[l][c].getLabel_principal().setText("");
                }else if(m.getTabela()[l][c].getTipo_cedula().compareTo("produto_baixo")== 0){
                    lista.getBloco_matriz()[l][c].getLabel_baixo().setText(String.valueOf(m.getTabela()[l][c].getNum_baixo()));
                    lista.getBloco_matriz()[l][c].getLabel_principal().setIcon(new javax.swing.ImageIcon(getClass().getResource("/Imagens/Linha3.png")));
                }else if(m.getTabela()[l][c].getTipo_cedula().compareTo("produto_cima")== 0){
                    lista.getBloco_matriz()[l][c].getLabel_cima().setText(String.valueOf(m.getTabela()[l][c].getNum_cima()));
                    lista.getBloco_matriz()[l][c].getLabel_principal().setIcon(new javax.swing.ImageIcon(getClass().getResource("/Imagens/Linha2.png")));
                }else if(m.getTabela()[l][c].getTipo_cedula().compareTo("produto_all")== 0){
                    lista.getBloco_matriz()[l][c].getLabel_baixo().setText(String.valueOf(m.getTabela()[l][c].getNum_baixo()));
                    lista.getBloco_matriz()[l][c].getLabel_cima().setText(String.valueOf(m.getTabela()[l][c].getNum_cima()));
                    lista.getBloco_matriz()[l][c].getLabel_principal().setIcon(new javax.swing.ImageIcon(getClass().getResource("/Imagens/Linha.png")));
                }
            }
        }
    }
    
    public boolean corrigir_e_exibir_na_tela(Lista_bloco_jlabel labels, Matriz m){
        int l,c;
        boolean tudo_certo = true;
        for(l = 0;l<5;l++){
            for(c = 0;c<5;c++){
                Bloco_matriz bloco = m.getTabela()[l][c];
//tabela[l][c];
                if(bloco.getTipo_cedula().compareTo("produto_baixo") == 0){
                    //calcula para baixo
                    int j = l+1;
                    int produto = 1;
                    int num;
                    while(j < 5){
                        if(m.getTabela()[j][c].getTipo_cedula().compareTo("preencher") == 0){
                            
                            try{
                                num = Integer.parseInt(labels.getBloco_matriz()[j][c].getLabel_principal().getText());
                                produto *= num;
                            }catch(NumberFormatException e){
                                break;
                            }
                            
                            
                        }else{
                            break;
                        }
                        j++;
                    }
                    if(bloco.getNum_baixo() == produto){
                        labels.getBloco_matriz()[l][c].getLabel_principal().setIcon(new javax.swing.ImageIcon(getClass().getResource("/Imagens/Linha3_certo.png")));
                    }else{
                        labels.getBloco_matriz()[l][c].getLabel_principal().setIcon(new javax.swing.ImageIcon(getClass().getResource("/Imagens/Linha3_errado.png")));
                        tudo_certo = false;
                    }
                }else if(bloco.getTipo_cedula().compareTo("produto_cima") == 0){
                    //calcula da direita para a esquerda
                    int k = c+1;
                    int produto = 1;
                    int num;
                    
                    while(k < 5){
                        if(m.getTabela()[l][k].getTipo_cedula().compareTo("preencher") == 0){
                            try{
                                num = Integer.parseInt(labels.getBloco_matriz()[l][k].getLabel_principal().getText());
                                produto *= num;
                            }catch(NumberFormatException e){
                                break;
                            }
                        }else{
                            break;
                        }
                        k++;
                    }
                    if(bloco.getNum_cima()== produto){
                        labels.getBloco_matriz()[l][c].getLabel_principal().setIcon(new javax.swing.ImageIcon(getClass().getResource("/Imagens/Linha2_certo.png")));
                    }else{
                        labels.getBloco_matriz()[l][c].getLabel_principal().setIcon(new javax.swing.ImageIcon(getClass().getResource("/Imagens/Linha2_errado.png")));
                        tudo_certo = false;
                    }
                    
                    
                }else if(bloco.getTipo_cedula().compareTo("produto_all") == 0){
                    
                    //calcula pra baixo
                    int j = l+1;
                    int produto_baixo = 1;
                    int num;
                    while(j < 5){
                        if(m.getTabela()[j][c].getTipo_cedula().compareTo("preencher") == 0){
                            
                            try{
                                num = Integer.parseInt(labels.getBloco_matriz()[j][c].getLabel_principal().getText());
                                produto_baixo *= num;
                            }catch(NumberFormatException e){
                                break;
                            }
                            
                            
                        }else{
                            break;
                        }
                        j++;
                    }
                    
                    
                    //calcula da direita para a esquerda
                    
                    int k = c+1;
                    int produto_cima = 1;
                    
                    while(k < 5){
                        if(m.getTabela()[l][k].getTipo_cedula().compareTo("preencher") == 0){
                            try{
                                num = Integer.parseInt(labels.getBloco_matriz()[l][k].getLabel_principal().getText());
                                produto_cima *= num;
                            }catch(NumberFormatException e){
                                break;
                            }
                        }else{
                            break;
                        }
                        k++;
                    }
                    
                    //analisa o rasultado e escolhe a i8magem
                    
                    if((bloco.getNum_baixo() == produto_baixo)&&(bloco.getNum_cima() == produto_cima)){
                        labels.getBloco_matriz()[l][c].getLabel_principal().setIcon(new javax.swing.ImageIcon(getClass().getResource("/Imagens/Linha_certo_all.png")));
                    }else if((bloco.getNum_baixo() == produto_baixo)&&(bloco.getNum_cima() != produto_cima)){
                        labels.getBloco_matriz()[l][c].getLabel_principal().setIcon(new javax.swing.ImageIcon(getClass().getResource("/Imagens/Linha_certo_baixo_errado_cima.png")));
                        tudo_certo = false;
                    }else if((bloco.getNum_baixo() != produto_baixo)&&(bloco.getNum_cima() == produto_cima)){
                        labels.getBloco_matriz()[l][c].getLabel_principal().setIcon(new javax.swing.ImageIcon(getClass().getResource("/Imagens/Linha_certo_cima_errado_baixo.png")));
                        tudo_certo = false;
                    }else{
                        labels.getBloco_matriz()[l][c].getLabel_principal().setIcon(new javax.swing.ImageIcon(getClass().getResource("/Imagens/Linha_errado_all.png")));
                        tudo_certo = false;
                    }
                }
            }
        }
        return tudo_certo;
    }
    
    public static boolean testar_valor_inserido(String inserido){
        if(inserido == null){
            return false;
        }
        if(inserido.isEmpty()){
            return false;
        }
        try{
            int num = Integer.parseInt(inserido);
            for(int i = 0; i < 6; i++){
                if(numeros_primos[i] == num){
                    return true;
                }
            }
            JOptionPane.showMessageDialog(null, "Valor inválido, informe um número primo de 2 a 13");
            return false;
        }catch (NumberFormatException e){
            JOptionPane.showMessageDialog(null, "Valor inválido");
            return false;
        }
    }
}
