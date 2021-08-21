import { Field, Form, Formik } from "formik";
import { Select, TextField } from "formik-material-ui";
import { Button, Box } from "@material-ui/core";
import { flexbox } from '@material-ui/system';
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
            <h1> Aqui vai um conteúdo</h1>
          </section>

          <section className={classes.root}>
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
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={brLocale}>
                  <Form className={classes.form}>
                    <Box  display="flex" flexWrap="wrap">
                      <Box>
                        <h1>Dados Pessoais</h1>

                        <h2>Nome Completo</h2>
                        <Field
                          className={classes.field}
                          name="nome"
                          component={TextField}
                          variant="outlined"
                        />
                      </Box>
                      <Box>
                        <h2>Cargo Pretendido</h2>
                        <Field
                          className={classes.field}
                          name="cargo"
                          component={TextField}
                          variant="outlined"
                        />
                      </Box>
                      <Box>
                        <h2>Data de Nascimento</h2>
                        <Field
                          className={classes.field}
                          component={KeyboardDatePicker}
                          name="dataNascimento"
                          format="dd/MM/yy"
                          disableFuture="true"
                          inputVariant="outlined"
                        />
                      </Box>
                      <Box>
                        <h2>Estado Civil</h2>
                        <Field
                          className={classes.field}
                          component={Select}
                          name="estadoCivil"
                          variant="outlined"
                        />
                      </Box>
                      <Box>
                        <h2>Gênero</h2>
                        <Field
                          className={classes.field}
                          component={Select}
                          name="genero"
                          variant="outlined"
                        />
                      </Box>
                      <Box>
                        <h2>Endereço</h2>
                        <Field
                          className={classes.field}
                          component={TextField}
                          name="endereço"
                          type="text"
                          variant="outlined"
                        />
                      </Box>
                      <Box>
                        <h2>Bairro</h2>
                        <Field
                          className={classes.field}
                          component={TextField}
                          name="bairro"
                          type="text"
                          variant="outlined"
                        />
                      </Box>
                      <Box>
                        <h2>Cidade</h2>
                        <Field
                          className={classes.field}
                          component={TextField}
                          name="cidade"
                          type="text"
                          variant="outlined"
                        />
                      </Box>
                      <Box>
                        <h2>CEP</h2>
                        <Field
                          className={classes.field}
                          component={TextField}
                          name="cep"
                          type="text"
                          variant="outlined"
                        />
                      </Box>
                      <Box>
                        <h2>Telefone Fixo 1</h2>
                        <Field
                          className={classes.field}
                          component={TextField}
                          name="telefone"
                          type="text"
                          variant="outlined"
                        />
                      </Box>
                      <Box>
                        <h2>Telefone Fixo 2</h2>
                        <Field
                          className={classes.field}
                          component={TextField}
                          name="telefone"
                          type="text"
                          variant="outlined"
                        />
                      </Box>
                      <Box>
                        <h2>Celular</h2>
                        <Field
                          className={classes.field}
                          component={TextField}
                          name="celular"
                          type="text"
                          variant="outlined"
                        />
                      </Box>
                      <Box>
                        <h2>Contato</h2>
                        <Field
                          className={classes.field}
                          component={TextField}
                          name="contato"
                          type="text"
                          variant="outlined"
                        />
                      </Box>
                      <Box>
                        <h2>E-mail</h2>
                        <Field
                          className={classes.field}
                          component={TextField}
                          name="email"
                          type="email"
                          variant="outlined"
                        />
                      </Box>
                    </Box>
                    <Box  display="flex" flexWrap="wrap">
                      <Box>
                        <h1>Documentos</h1>

                        <h2>Identidade</h2>
                        <Field
                          className={classes.field}
                          name="identidade"
                          component={TextField}
                          variant="outlined"
                        />
                      </Box>
                      <Box>
                        <h2>CPF</h2>
                        <Field
                          className={classes.field}
                          name="cpf"
                          component={TextField}
                          variant="outlined"
                        />
                      </Box>
                      <Box>
                        <h2>Possui veículo?</h2>
                        <Field
                          className={classes.field}
                          component={Select}
                          name="veiculo"
                          variant="outlined"
                        />
                      </Box>
                      <Box>
                        <h2>Habilitação</h2>
                        <Field
                          className={classes.field}
                          component={Select}
                          name="habilitação"
                          variant="outlined"
                        />
                      </Box>
                    </Box>
                    <Box>
                      <Button
                        color="primary"
                        disabled={isSubmitting}
                        disableElevation
                        onClick={submitForm}
                        variant="contained"
                      >
                        Enviar
                      </Button>
                    </Box>
                    {isSubmitting}
                  </Form>
                </MuiPickersUtilsProvider>
              )}
            </Formik>
          </section>
        </section>
      </Page>
    </>
  );
};

export default Home;
