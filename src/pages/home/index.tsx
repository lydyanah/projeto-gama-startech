import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { KeyboardDatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import brLocale from "date-fns/locale/pt-BR";
// import * as Yup from "yup";
import Page from "../../components/Page/Page";
import formStyles from "./formStyles";
import "./styles.css";

const Home = () => {
  const initialValues = {};

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
                            <Typography variant="h2" className={classes.h2}>
                              Nome Completo
                            </Typography>
                            <Field
                              className={classes.field}
                              name="nome"
                              component={TextField}
                              variant="outlined"
                              size="small"
                              fullWidth
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={4}>
                            <Typography variant="h2" className={classes.h2}>
                              Cargo Pretendido
                            </Typography>
                            <Field
                              className={classes.field}
                              name="cargo"
                              component={TextField}
                              variant="outlined"
                              size="small"
                              fullWidth
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={3}>
                            <Typography variant="h2" className={classes.h2}>
                              Data de Nascimento
                            </Typography>
                            <Field
                              className={classes.field}
                              component={KeyboardDatePicker}
                              name="dataNascimento"
                              format="dd/MM/yy"
                              disableFuture="true"
                              inputVariant="outlined"
                              size="small"
                              cancelLabel="CANCELAR"
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={4}>
                            <Typography variant="h2" className={classes.h2}>
                              Estado Civil
                            </Typography>
                            <Field
                              className={classes.field}
                              component={TextField}
                              name="estadoCivil"
                              variant="outlined"
                              size="small"
                              InputProps={{ classes: { input: classes.input } }}
                              SelectProps={{
                                native: true,
                              }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={4}>
                            <Typography variant="h2" className={classes.h2}>
                              Gênero
                            </Typography>
                            <Field
                              className={classes.field}
                              component={TextField}
                              name="genero"
                              variant="outlined"
                              size="small"
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={2}>
                            <Typography variant="h2" className={classes.h2}>
                              CEP
                            </Typography>
                            <Field
                              className={classes.field}
                              component={TextField}
                              name="cep"
                              type="text"
                              variant="outlined"
                              size="small"
                              fullWidth
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={8}>
                            <Typography variant="h2" className={classes.h2}>
                              Endereço
                            </Typography>
                            <Field
                              className={classes.field}
                              component={TextField}
                              name="endereço"
                              type="text"
                              variant="outlined"
                              size="small"
                              fullWidth
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={1}>
                            <Typography variant="h2" className={classes.h2}>
                              Nº
                            </Typography>
                            <Field
                              className={classes.field}
                              component={TextField}
                              name="numero"
                              type="text"
                              variant="outlined"
                              size="small"
                              fullWidth
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={4}>
                            <Typography variant="h2" className={classes.h2}>
                              Bairro
                            </Typography>
                            <Field
                              className={classes.field}
                              component={TextField}
                              name="bairro"
                              type="text"
                              variant="outlined"
                              size="small"
                              fullWidth
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={6}>
                            <Typography variant="h2" className={classes.h2}>
                              Cidade
                            </Typography>
                            <Field
                              className={classes.field}
                              component={TextField}
                              name="cidade"
                              type="text"
                              variant="outlined"
                              size="small"
                              fullWidth
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs={1}>
                            <Typography variant="h2" className={classes.h2}>
                              Estado
                            </Typography>
                            <Field
                              className={classes.field}
                              component={TextField}
                              name="cidade"
                              type="text"
                              variant="outlined"
                              size="small"
                              fullWidth
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs>
                            <Typography variant="h2" className={classes.h2}>
                              Telefone Fixo 1
                            </Typography>
                            <Field
                              className={classes.field}
                              component={TextField}
                              name="telefone"
                              type="text"
                              variant="outlined"
                              size="small"
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs>
                            <Typography variant="h2" className={classes.h2}>
                              Telefone Fixo 2
                            </Typography>
                            <Field
                              className={classes.field}
                              component={TextField}
                              name="telefone"
                              type="text"
                              variant="outlined"
                              size="small"
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs>
                            <Typography variant="h2" className={classes.h2}>
                              Celular
                            </Typography>
                            <Field
                              className={classes.field}
                              component={TextField}
                              name="celular"
                              type="text"
                              variant="outlined"
                              size="small"
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs>
                            <Typography variant="h2" className={classes.h2}>
                              Contato
                            </Typography>
                            <Field
                              className={classes.field}
                              component={TextField}
                              name="contato"
                              type="text"
                              variant="outlined"
                              size="small"
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs>
                            <Typography variant="h2" className={classes.h2}>
                              E-mail
                            </Typography>
                            <Field
                              className={classes.field}
                              component={TextField}
                              name="email"
                              type="email"
                              variant="outlined"
                              size="small"
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
                            <Typography variant="h2" className={classes.h2}>
                              Identidade
                            </Typography>
                            <Field
                              className={classes.field}
                              name="identidade"
                              component={TextField}
                              variant="outlined"
                              size="small"
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs>
                            <Typography variant="h2" className={classes.h2}>
                              CPF
                            </Typography>
                            <Field
                              className={classes.field}
                              name="cpf"
                              component={TextField}
                              variant="outlined"
                              size="small"
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs>
                            <Typography variant="h2" className={classes.h2}>
                              Possui veículo?
                            </Typography>
                            <Field
                              className={classes.field}
                              component={TextField}
                              name="veiculo"
                              variant="outlined"
                              size="small"
                              InputProps={{ classes: { input: classes.input } }}
                            />
                          </Grid>
                          <Grid item className={classes.field} xs>
                            <Typography variant="h2" className={classes.h2}>
                              Habilitação
                            </Typography>
                            <Field
                              className={classes.field}
                              component={TextField}
                              name="habilitação"
                              variant="outlined"
                              size="small"
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
