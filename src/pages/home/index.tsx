import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { Button, Grid, Paper, Typography, MenuItem } from "@material-ui/core";
import { KeyboardDatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import brLocale from "date-fns/locale/pt-BR";
import React from "react";
// import * as Yup from "yup";
//import axios from "axios";
import Page from "../../components/Page/Page";
import formStyles from "./formStyles";
import "./styles.css";

const Home = () => {
  const initialValues = {
    nome: "",
    cargo: "",
    dataNascimento: new Date(),
    estadoCivil: "selecione",
    genero: "selecione",
    cep: "",
    endereco: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "",
    celular: "",
    email: "",
    telefone1: "",
    telefone2: "",
    contato: "",
    identidade: "",
    cpf: "",
    veiculo: "selecione",
    habilitacao: "selecione",
    categoria: "",
  };

  const classes = formStyles();

  return (
    <>
      <Page>
        <section className="home">
          <section className="conteúdo">
            <Typography> Aqui vai um conteúdo</Typography>
          </section>

          <section className="formulário">
            <Formik
              initialValues={initialValues}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  alert(JSON.stringify(values, null, 2));
                }, 500);
              }}
              // validationSchema={}
            >
              {({ submitForm, isSubmitting }) => (
                <Grid container className={classes.root}>
                  <MuiPickersUtilsProvider
                    utils={DateFnsUtils}
                    locale={brLocale}
                  >
                    <Form className={classes.form}>
                      <Typography variant="h1" className={classes.h1}>
                        Banco de Talentos
                      </Typography>
                      <Paper className={classes.root} elevation={3}>
                        <Grid container className={classes.container}>
                          <Grid item className={classes.field} xs={12}>
                            <Typography variant="h1" className={classes.h1}>
                              Dados Pessoais
                            </Typography>
                          </Grid>
                          <Grid item className={classes.field} xs={7}>
                            <label htmlFor="nome">Nome Completo</label>
                            <Field
                              className={classes.field}
                              name="nome"
                              id="nome"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={4}>
                            <label htmlFor="cargo">Cargo Pretendido</label>
                            <Field
                              className={classes.field}
                              name="cargo"
                              id="cargo"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={3}>
                            <label htmlFor="dataNascimento">
                              Data de Nascimento
                            </label>
                            <Field
                              className={classes.field}
                              name="dataNascimento"
                              id="dataNascimento"
                              component={KeyboardDatePicker}
                              format="dd/MM/yyyy"
                              disableFuture="true"
                              inputVariant="outlined"
                              cancelLabel="CANCELAR"
                              InputProps={{
                                classes: {
                                  input: classes.input,
                                  adornedEnd: classes.adornedEnd,
                                },
                              }}
                              KeyboardButtonProps={{ size: "small" }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={4}>
                            <label htmlFor="estadoCivil">Estado Civil</label>
                            <Field
                              className={classes.field}
                              name="estadoCivil"
                              id="estadoCivil"
                              component={TextField}
                              variant="outlined"
                              select={true}
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                            >
                              <MenuItem value="selecione">
                                <em>Selecione</em>
                              </MenuItem>
                              <MenuItem value="casado">Casado(o)</MenuItem>
                              <MenuItem value="solteiro">Solteiro(a)</MenuItem>
                              <MenuItem value="divorciado">
                                Divorciado(a)
                              </MenuItem>
                              <MenuItem value="viuvo">Viúva(o)</MenuItem>
                              <MenuItem value="outro">Outro</MenuItem>
                              <MenuItem value="pnd">Prefiro não dizer</MenuItem>
                            </Field>
                          </Grid>
                          <Grid item className={classes.field} xs={4}>
                            <label htmlFor="genero">Gênero</label>
                            <Field
                              className={classes.field}
                              name="genero"
                              id="genero"
                              component={TextField}
                              variant="outlined"
                              select={true}
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                            >
                              <MenuItem value="selecione">
                                <em>Selecione</em>
                              </MenuItem>
                              <MenuItem value="feminino">Feminino</MenuItem>
                              <MenuItem value="masculino">Masculino</MenuItem>
                              <MenuItem value="outro">Outro</MenuItem>
                              <MenuItem value="pnd">Prefiro não dizer</MenuItem>
                            </Field>
                          </Grid>
                          <Grid item className={classes.field} xs={2}>
                            <label htmlFor="cep">CEP</label>
                            <Field
                              className={classes.field}
                              name="cep"
                              id="cep"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={8}>
                            <label htmlFor="endereco">Endereço</label>
                            <Field
                              className={classes.field}
                              name="endereco"
                              id="endereco"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={1}>
                            <label htmlFor="numero">Nº</label>
                            <Field
                              className={classes.field}
                              name="numero"
                              id="numero"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={4}>
                            <label htmlFor="bairro">Bairro</label>
                            <Field
                              className={classes.field}
                              name="bairro"
                              id="bairro"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={6}>
                            <label htmlFor="cidade">Cidade</label>
                            <Field
                              className={classes.field}
                              name="cidade"
                              id="cidade"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={1}>
                            <label htmlFor="uf">Estado</label>
                            <Field
                              className={classes.field}
                              name="uf"
                              id="uf"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={3}>
                            <label htmlFor="celular">Celular</label>
                            <Field
                              className={classes.field}
                              name="celular"
                              id="celular"
                              component={TextField}
                              variant="outlined"
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={5}>
                            <label htmlFor="email">E-mail</label>
                            <Field
                              className={classes.field}
                              name="email"
                              id="email"
                              component={TextField}
                              variant="outlined"
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={3}>
                            <label htmlFor="telefone1">
                              Telefone Residencial
                            </label>
                            <Field
                              className={classes.field}
                              name="telefone1"
                              id="telefone1"
                              component={TextField}
                              variant="outlined"
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs>
                            <label htmlFor="telefone2">
                              Telefone para recados
                            </label>
                            <Field
                              className={classes.field}
                              name="telefone2"
                              id="telefone2"
                              component={TextField}
                              variant="outlined"
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs>
                            <label htmlFor="contato">Falar com</label>
                            <Field
                              className={classes.field}
                              name="contato"
                              id="contato"
                              component={TextField}
                              variant="outlined"
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                        </Grid>
                        <Grid container className={classes.container}>
                          <Grid item className={classes.field} xs={12}>
                            <Typography variant="h1" className={classes.h1}>
                              Documentos
                            </Typography>
                          </Grid>
                          <Grid item className={classes.field} xs>
                            <label htmlFor="identidade">Identidade</label>
                            <Field
                              className={classes.field}
                              name="identidade"
                              id="identidade"
                              component={TextField}
                              variant="outlined"
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs>
                            <label htmlFor="cpf">CPF</label>
                            <Field
                              className={classes.field}
                              name="cpf"
                              id="cpf"
                              component={TextField}
                              variant="outlined"
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs>
                            <label htmlFor="veiculo">Possui veículo?</label>
                            <Field
                              className={classes.field}
                              name="veiculo"
                              id="veiculo"
                              component={TextField}
                              variant="outlined"
                              select={true}
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                            >
                              <MenuItem value="selecione">
                                <em>Selecione</em>
                              </MenuItem>
                              <MenuItem value="sim">Sim</MenuItem>
                              <MenuItem value="nao">Não</MenuItem>
                            </Field>
                          </Grid>
                          <Grid item className={classes.field} xs>
                            <label htmlFor="habilitacao">Habilitação</label>
                            <Field
                              className={classes.field}
                              name="habilitacao"
                              id="habilitacao"
                              component={TextField}
                              variant="outlined"
                              select={true}
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                            >
                              <MenuItem value="selecione">
                                <em>Selecione</em>
                              </MenuItem>
                              <MenuItem value="sim">Sim</MenuItem>
                              <MenuItem value="nao">Não</MenuItem>
                            </Field>
                          </Grid>
                          <Grid item className={classes.field} xs>
                            <label htmlFor="categoria">Categoria</label>
                            <Field
                              className={classes.field}
                              name="categoria"
                              id="categoria"
                              component={TextField}
                              variant="outlined"
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                        </Grid>
                        <Grid item className={classes.submitButton}>
                          <Button
                            classes={{
                              root: classes.submitButton,
                              label: classes.label,
                            }}
                            color="primary"
                            disabled={isSubmitting}
                            disableElevation
                            onClick={submitForm}
                            variant="contained"
                          >
                            Enviar
                          </Button>
                        </Grid>
                      </Paper>
                      {isSubmitting}
                    </Form>
                  </MuiPickersUtilsProvider>
                </Grid>
              )}
            </Formik>
          </section>
        </section>
      </Page>
    </>
  );
};

export default Home;
