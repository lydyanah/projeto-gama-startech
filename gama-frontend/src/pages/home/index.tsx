import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { Button, Grid, Paper, Typography, MenuItem } from "@material-ui/core";
import { KeyboardDatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import brLocale from "date-fns/locale/pt-BR";
import candidateValidation from "../../schemas/candidateValidation";
import api from "../../services/api";
import Page from "../../components/Page/Page";
import formStyles from "./formStyles";
import "./styles.css";

const Home = () => {
  const initialValues = {
    nome: "",
    cargo: "",
    dataNascimento: null,
    estadoCivil: "",
    genero: "",
    cep: "",
    logradouro: "",
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
    veiculo: "",
    habilitacao: "",
    categoria: "",
  };

  const address = (ev: any, setFieldValue: any) => {
    const { value } = ev.target;
    const cep = value;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue("logradouro", data.logradouro);
        setFieldValue("bairro", data.bairro);
        setFieldValue("cidade", data.localidade);
        setFieldValue("uf", data.uf);
      });
  };

  const classes = formStyles();

  return (
    <>
      <Page>
        <section className="home">
          <section className="conteúdo">
            <h1>
              Cadastre-se em nosso Banco de Talentos e encontre a sua próxima
              oportunidade!
            </h1>
          </section>

          <section className="formulário">
            <Formik
              initialValues={initialValues}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  const response = await api.post("/register", {
                    nome: values.nome,
                    cargo: values.cargo,
                    dataNascimento: values.dataNascimento,
                    estadoCivil: values.estadoCivil,
                    genero: values.genero,
                    cep: values.cep,
                    logradouro: values.logradouro,
                    numero: values.numero,
                    bairro: values.bairro,
                    cidade: values.cidade,
                    uf: values.uf,
                    celular: values.celular,
                    email: values.email,
                    telefone1: values.telefone1,
                    telefone2: values.telefone2,
                    contato: values.contato,
                    identidade: values.identidade,
                    cpf: values.cpf,
                    veiculo: values.veiculo,
                    habilitacao: values.habilitacao,
                    categoria: values.categoria,
                  });
                  if (response.status === 200) {
                    alert("Cadastro realizado com sucesso");
                    console.log("Cadastrado com sucesso");
                  } else {
                    console.log("Ocorreu uma falha");
                  }
                  setSubmitting(false);
                } catch (error) {
                  console.log(`Ocorreu uma falha ${error}`);
                }
              }}
              validationSchema={candidateValidation}
            >
              {({ setFieldValue, submitForm, isSubmitting }) => (
                <Grid container className={classes.root}>
                  <MuiPickersUtilsProvider
                    utils={DateFnsUtils}
                    locale={brLocale}
                  >
                    <Form className={classes.form}>
                      <h2 className="formTitle">Banco de Talentos</h2>
                      <Paper className={classes.root} elevation={3}>
                        <Grid container className={classes.container}>
                          <Grid item className={classes.field} xs={12} sm={12} md={12} lg={12}>
                            <Typography variant="h1" className={classes.h1}>
                              Dados Pessoais
                            </Typography>
                          </Grid>
                          <Grid item className={classes.field} xs={12} sm={12} md={5} lg={6}>
                            <label htmlFor="nome">Nome Completo</label>
                            <Field
                              className={classes.field}
                              name="nome"
                              id="nome"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                              FormHelperTextProps={{
                                classes: { root: classes.helperText },
                              }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={12} sm={6} md={3} lg={5}>
                            <label htmlFor="cargo">Cargo Pretendido</label>
                            <Field
                              className={classes.field}
                              name="cargo"
                              id="cargo"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                              FormHelperTextProps={{
                                classes: { root: classes.helperText },
                              }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={12} sm={4} md={3} lg={3}>
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
                              fullWidth={true}
                              cancelLabel="CANCELAR"
                              invalidDateMessage=""
                              InputProps={{
                                classes: {
                                  input: classes.input,
                                  adornedEnd: classes.adornedEnd,
                                },
                              }}
                              KeyboardButtonProps={{ size: "small" }}
                              FormHelperTextProps={{
                                classes: { root: classes.helperText },
                              }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={12} sm={5} md={3} lg={4}>
                            <label htmlFor="estadoCivil">Estado Civil</label>
                            <Field
                              className={classes.field}
                              name="estadoCivil"
                              id="estadoCivil"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              select={true}
                              InputProps={{ classes: { input: classes.input } }}
                              FormHelperTextProps={{
                                classes: { root: classes.helperText },
                              }}
                            >
                              <MenuItem value="">
                                <em>Selecione</em>
                              </MenuItem>
                              <MenuItem value="Casado">Casado(a)</MenuItem>
                              <MenuItem value="Solteiro">Solteiro(a)</MenuItem>
                              <MenuItem value="Divorciado">
                                Divorciado(a)
                              </MenuItem>
                              <MenuItem value="Viuvo">Viúvo(a)</MenuItem>
                              <MenuItem value="Outro">Outro</MenuItem>
                              <MenuItem value="Prefiro nao dizer">
                                Prefiro não dizer
                              </MenuItem>
                            </Field>
                          </Grid>
                          <Grid item className={classes.field} xs={12} sm={5} md={3} lg={4}>
                            <label htmlFor="genero">Gênero</label>
                            <Field
                              className={classes.field}
                              name="genero"
                              id="genero"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              select={true}
                              InputProps={{ classes: { input: classes.input } }}
                              FormHelperTextProps={{
                                classes: { root: classes.helperText },
                              }}
                            >
                              <MenuItem value="">
                                <em>Selecione</em>
                              </MenuItem>
                              <MenuItem value="Feminino">Feminino</MenuItem>
                              <MenuItem value="Masculino">Masculino</MenuItem>
                              <MenuItem value="Outro">Outro</MenuItem>
                              <MenuItem value="Prefiro nao dizer">
                                Prefiro não dizer
                              </MenuItem>
                            </Field>
                          </Grid>
                            <Grid item className={classes.field} xs={12} sm={3} md={2} lg={2}>
                            <label htmlFor="cep">CEP</label>
                            <Field
                              className={classes.field}
                              name="cep"
                              id="cep"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              onMouseOut={(ev: any) =>
                                address(ev, setFieldValue)
                              }
                              onKeyDown={(ev: any) =>
                                address(ev, setFieldValue)
                              }
                              InputProps={{ classes: { input: classes.input } }}
                              FormHelperTextProps={{
                                classes: { root: classes.helperText },
                              }}
                              required
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={12} sm={6} md={4} lg={7}>
                            <label htmlFor="logradouro">Endereço</label>
                            <Field
                              className={classes.field}
                              name="logradouro"
                              id="logradouro"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                              FormHelperTextProps={{
                                classes: { root: classes.helperText },
                              }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={12} sm={2} md={1} lg={2}>
                            <label htmlFor="numero">Nº</label>
                            <Field
                              className={classes.field}
                              name="numero"
                              id="numero"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                              FormHelperTextProps={{
                                classes: { root: classes.helperText },
                              }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={12} sm={4} md={4} lg={4}>
                            <label htmlFor="bairro">Bairro</label>
                            <Field
                              className={classes.field}
                              name="bairro"
                              id="bairro"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                              FormHelperTextProps={{
                                classes: { root: classes.helperText },
                              }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={12} sm={5} md={4} lg={4}>
                            <label htmlFor="cidade">Cidade</label>
                            <Field
                              className={classes.field}
                              name="cidade"
                              id="cidade"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                              FormHelperTextProps={{
                                classes: { root: classes.helperText },
                              }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={12} sm={2} md={1} lg={1}>
                            <label htmlFor="uf">Estado</label>
                            <Field
                              className={classes.field}
                              name="uf"
                              id="uf"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                              FormHelperTextProps={{
                                classes: { root: classes.helperText },
                              }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={12} sm={4} md={2} lg={3}>
                            <label htmlFor="celular">Celular</label>
                            <Field
                              className={classes.field}
                              name="celular"
                              id="celular"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                              FormHelperTextProps={{
                                classes: { root: classes.helperText },
                              }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={12} sm={6} md={3} lg={5}>
                            <label htmlFor="email">E-mail</label>
                            <Field
                              className={classes.field}
                              name="email"
                              id="email"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                              FormHelperTextProps={{
                                classes: { root: classes.helperText },
                              }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={12} sm={5} md={3} lg={4}>
                            <label htmlFor="telefone1">
                              Telefone Residencial
                            </label>
                            <Field
                              className={classes.field}
                              name="telefone1"
                              id="telefone1"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                              FormHelperTextProps={{
                                classes: { root: classes.helperText },
                              }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={12} sm={5} md={3} lg={4}>
                            <label htmlFor="telefone2">
                              Telefone para recados
                            </label>
                            <Field
                              className={classes.field}
                              name="telefone2"
                              id="telefone2"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                              FormHelperTextProps={{
                                classes: { root: classes.helperText },
                              }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={12} sm={5} md={3} lg={3}>
                            <label htmlFor="contato">Falar com</label>
                            <Field
                              className={classes.field}
                              name="contato"
                              id="contato"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                              FormHelperTextProps={{
                                classes: { root: classes.helperText },
                              }}
                            />
                          </Grid>
                        </Grid>
                        <Grid container className={classes.container}>
                          <Grid item className={classes.field} xs={12} sm={12} md={12} lg={12}>
                            <Typography variant="h1" className={classes.h1}>
                              Documentos
                            </Typography>
                          </Grid>
                          <Grid item className={classes.field} xs={12} sm={4} md={2} lg={2}>
                            <label htmlFor="identidade">Identidade</label>
                            <Field
                              className={classes.field}
                              name="identidade"
                              id="identidade"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                              FormHelperTextProps={{
                                classes: { root: classes.helperText },
                              }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={12} sm={5} md={2} lg={3}>
                            <label htmlFor="cpf">CPF</label>
                            <Field
                              className={classes.field}
                              name="cpf"
                              id="cpf"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                              FormHelperTextProps={{
                                classes: { root: classes.helperText },
                              }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={12} sm={4} md={2} lg={3}>
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
                              FormHelperTextProps={{
                                classes: { root: classes.helperText },
                              }}
                            >
                              <MenuItem value="">
                                <em>Selecione</em>
                              </MenuItem>
                              <MenuItem value="Sim">Sim</MenuItem>
                              <MenuItem value="Nao">Não</MenuItem>
                            </Field>
                          </Grid>
                          <Grid item className={classes.field} xs={12} sm={4} md={2} lg={2}>
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
                              FormHelperTextProps={{
                                classes: { root: classes.helperText },
                              }}
                            >
                              <MenuItem value="">
                                <em>Selecione</em>
                              </MenuItem>
                              <MenuItem value="Sim">Sim</MenuItem>
                              <MenuItem value="Nao">Não</MenuItem>
                            </Field>
                          </Grid>
                          <Grid item className={classes.field} xs={12} sm={2} md={1} lg={1}>
                            <label htmlFor="categoria">Categoria</label>
                            <Field
                              className={classes.field}
                              name="categoria"
                              id="categoria"
                              component={TextField}
                              variant="outlined"
                              fullWidth={true}
                              InputProps={{ classes: { input: classes.input } }}
                              FormHelperTextProps={{
                                classes: { root: classes.helperText },
                              }}
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
