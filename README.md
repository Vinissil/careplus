# Care Plus One 🩺

Aplicativo mobile desenvolvido em **React Native + TypeScript** usando **Expo**, para o desafio de **Mobile Development and IoT**.

O objetivo é simular um app de acompanhamento de saúde, permitindo que o(a) paciente visualize categorias de serviços, informações pessoais, detalhes de médicos, calendário de consultas e histórico básico, com foco em **layout fiel ao Figma** e **navegação entre telas**.

---

## 👥 Integrantes do grupo

- Gabriel Mediotti Marques – **RM 552632**  
- Jó Sales – **RM 552679**  
- Miguel Garcez de Carvalho – **RM 553768**  
- Vinicius Souza e Silva – **RM 552781**

---

## 🚀 Como iniciar o projeto

### 1. Baixar o projeto

Você pode:

- Clonar o repositório do GitHub:

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPO.git
cd SEU-REPO

npm install


npx expo start

clicar "a" para android

## 🧩 Tecnologias utilizadas

- **React Native** com **TypeScript**
- **Expo**
- **React Navigation**
  - `@react-navigation/native`
  - `@react-navigation/native-stack`
  - `@react-navigation/bottom-tabs`
- Componentes básicos do React Native:
  - `View`, `Text`, `ScrollView`
  - `TextInput`
  - `Image`
  - `TouchableOpacity`
  - `Alert`
- Estilização com **`StyleSheet`**
- Ícones e imagens: **Flaticon** (carregados via URL)

---

## 🧭 Estrutura de navegação

A navegação é dividida em **Stack Navigators** e **Bottom Tab Navigation**:

- `AuthStack`
  - Splash
  - Login
  - Criar Conta
  - Redefinir Senha
  - MainTabs (entrada para o app principal)
- `MainTabs` (Bottom Tab)
  - Consultations (remédio)
  - PatientProfile (pessoa com coração)
  - Home (estetoscópio – abre o `HomeStack`)
  - Heart (coração)
  - Account (perfil)
- `HomeStack`
  - HomeCategories (Home principal de categorias)
  - DoctorDetails (tela do médico)
  - Calendar (tela de calendário / agendamento)

---

## 📱 Telas do aplicativo

### 1. Splash – **`SplashScreen.tsx`**

- Tela inicial do app, com ilustração de médico e enfermeira.
- Botão circular com **seta** no centro inferior.
- Ao tocar na seta, o usuário é redirecionado para a **tela de Login**.
- Funciona como “capa” do app, alinhada ao design do Figma.

---

### 2. Login – **`LoginScreen.tsx`**

- Campos:
  - **Email**
  - **Senha**
- Botões:
  - **Entrar** → valida se os campos foram preenchidos. Em caso de sucesso, navega para o **app principal** (`MainTabs`).
  - **Criar Usuário** → vai para a tela **Criar conta**.
  - **Esqueci a Senha** → vai para **Redefinir senha**.
- Ícone de seta no topo para voltar à **Splash**.
- Atende ao requisito de **validação de formulário na tela de Login**.

---

### 3. Criar conta – **`SignUpScreen.tsx`**

- Campos:
  - Email  
  - Nome Completo  
  - Senha  
  - Confirmar senha
- Validações:
  - Todos os campos devem estar preenchidos.
  - Senha e Confirmar senha devem ser iguais.
- Em caso de sucesso:
  - Exibe um **Alert** informando que a conta foi criada.
  - Retorna para a tela de **Login**.
- Layout fiel ao Figma: título “Criar conta”, inputs empilhados e botão azul “Criar conta”.

---

### 4. Redefinir senha – **`ResetPasswordScreen.tsx`**

- Campos:
  - Nova senha  
  - Confirmar senha
- Validações:
  - Ambos os campos precisam ser preenchidos.
  - As senhas devem coincidir.
- Em caso de sucesso:
  - Exibe **Alert** informando que a senha foi redefinida.
  - Redireciona o usuário de volta para a tela de **Login**.
- Essa tela replica o design “Redefinir Senha” do Figma, com seta de voltar no topo.

---

### 5. Home de Categorias – **`HomeCategoriesScreen.tsx`**  
> Home principal exibida **após o login** (aba do estetoscópio).

- Header azul com:
  - Ícone de sino no canto superior.
  - Texto **“Bem Vindo(a), Nome da Pessoa”**.
  - Título **“Categorias”**.
- Grid de 6 categorias:
  - Terapia  
  - Exames  
  - Consultas  
  - Fisioterapia  
  - Dentista  
  - Agenda  
- Cada categoria é um card com ícone e texto, lembrando a interface do Figma.
- Link **“Mostrar mais”**:
  - Ao tocar, navega para a tela de **Perfil do Paciente**.
- Card de **Informações** na parte inferior:
  - Ícone (Plano/Tarefas)  
  - Título “Informações”  
  - Texto de exemplo (Lorem Ipsum)

---

### 6. Perfil do Paciente – **`PatientProfileScreen.tsx`**

- Card superior azul com:
  - **Nome do Paciente** (sublinhado)
  - Texto “PACIENTE”
  - Foto do paciente (avatar)
  - Sino de notificação
- Card de informações pessoais:
  - Linha 1:
    - **IDADE** + ícone de coração
    - **Tipo Sanguíneo** + ícone de gota
  - Linha 2:
    - **Altura** + ícone de régua
    - **Peso** + ícone relacionado
- Card de **Último exame**:
  - Título “Último exame”
  - Nome do médico
  - Nome do exame
  - Dia e hora (texto ao lado direito)
- Cards estéticos:
  - **Configurar Objetivos**
  - **Clínicas e Médicos Favoritos**
- Atende ao requisito de uso de **Image, Text, View, TouchableOpacity, ScrollView** e layout estruturado.

---

### 7. Detalhes do Médico – **`DoctorDetailsScreen.tsx`**

- Card azul no topo com:
  - **Nome do doutor**
  - **Especialização**
  - Nota (estrela + valor numérico)
  - Foto do médico
  - Botão **“Agendar Consulta”** → abre a tela de **Calendário**.
- Cards abaixo:
  1. **Informações Profissionais**
     - Ao tocar, abre uma área expandida com texto explicando especialização e atuação do médico.
  2. **Localização**
     - Ao tocar, exibe um “mapa” estático (uma view simulando mapa) e o endereço completo do consultório.
  3. **Avaliações (34)**
     - Ao tocar, mostra **3 avaliações de pacientes** (nome, número de estrelas, comentário).
- Conceito de **acordeão/expansão** aplicado com `useState` para abrir/fechar seções.

---

### 8. Calendário – **`CalendarScreen.tsx`**

- Header azul com:
  - Sino de notificação.
  - Título **“Calendário”**.
- Card de calendário:
  - Mês **Setembro** com setas `<` e `>`.
  - Linha com dias da semana (Seg, Ter, Qua, Qui, Sex).
  - Data **Seg 24** destacada com fundo oval azul.
- Card de horários:
  - Título **“Horário”**.
  - Lista horizontal com horários:
    - 8:00, 8:30, **9:00 (selecionado)**, 9:30, 10:00.
- Seção **“Últimas Consultas”**:
  - Lista de cards com:
    - Foto do médico
    - Nome
    - Especialização
    - Nota (estrela)
    - Horário (ícone de relógio + texto)
- Essa tela é acessada pelo botão **“Agendar Consulta”** na tela de **Detalhes do Médico**.

---

### 9. Telas das outras abas da Tab (placeholders)

As demais abas da `BottomTab` possuem telas simples (apenas texto explicativo), para demonstrar a navegação entre seções:

- **ConsultationsScreen.tsx** – lista de consultas (texto explicando que pode ser expandido futuramente).
- **HeartScreen.tsx** – área para métricas de saúde ou favoritos.
- **AccountScreen.tsx** – tela de perfil do usuário, eventualmente para configurações.

---

## 📂 Estrutura de pastas (principal)

```text
src/
├─ navigation/
│  ├─ AuthStack.tsx        # Splash, Login, SignUp, ResetPassword, MainTabs
│  ├─ MainTabs.tsx         # Bottom Tab Navigation (5 ícones)
│  └─ HomeStack.tsx        # Home Categorias, Detalhes do Médico, Calendário
└─ screens/
   ├─ SplashScreen.tsx
   ├─ LoginScreen.tsx
   ├─ SignUpScreen.tsx
   ├─ ResetPasswordScreen.tsx
   ├─ HomeCategoriesScreen.tsx
   ├─ PatientProfileScreen.tsx
   ├─ DoctorDetailsScreen.tsx
   ├─ CalendarScreen.tsx
   ├─ ConsultationsScreen.tsx
   ├─ HeartScreen.tsx
   └─ AccountScreen.tsx
# careplus
